<script setup lang="ts">
import { useGetSupabaseAssetsURL } from '~/composables/helper';
import { EMPTY_UUID } from '~/constants/general'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const store = useGeneralStore()

export type SupabaseRooms = typeof supabaseRooms
export type SupabaseLefiner = typeof supabaseLefiner

const { data: supabaseRooms } = await supabase
	.from('rooms')
	.select('*, participants(is_owner, profiles(*))')

const { data: supabaseLefiner } = await supabase
	.from('profiles')
	.select('*, follows!follows_following_id_fkey(follower_id)')
	.neq('full_name', null)
	.neq('id', (user.value?.id || EMPTY_UUID))

store.rooms = supabaseRooms?.filter(item => item.participants.length > 1).sort((a, b) => a.participants.length - b.participants.length) || []
store.lefiners = supabaseLefiner?.sort((a, b) => b.follows.length - a.follows.length) || []
</script>

<template>
	<div class="page">
		<HomeHero />
		<HomeLogoCloud />
		<div class="flex flex-col gap-12 pt-48">
			<SharedCategory class="px-5" title="Popular Live Rooms" to="rooms" :length="store.rooms?.length">
				<template v-if="store.rooms?.length">
					<SharedCardsRoom
						v-for="(item, idx) in store.rooms?.slice(0, 4)"
						:key="idx"
						:data="item"
					/>
					<USkeleton v-for="idx in (4 - store.rooms.length)" :key="idx" class="room_skeleton" :style="{ opacity: idx * 0.1 }" :ui="{ rounded: 'rounded-3xl' }" />
				</template>

				<template v-else>
					<USkeleton v-for="idx in 4" :key="idx" class="room_skeleton" :style="{ opacity: idx * 0.1 }" :ui="{ rounded: 'rounded-3xl' }" />
				</template>
			</SharedCategory>
			<SharedCategory class="px-5" title="Popular Lefiners" to="lefiners" :length="store.lefiners?.length">
				<SharedCardsProfile
					v-for="(item, idx) in store.lefiners?.slice(0, 4).filter((item) => item.id !== user?.id)"
					:key="idx"
					:data="item"
				/>
			</SharedCategory>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.room_skeleton {
	@apply h-[250px]
}
</style>
