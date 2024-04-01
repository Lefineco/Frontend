<script setup lang="ts">
import { Fit } from '@rive-app/canvas'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()

export type SupabaseRooms = typeof supabaseRooms

const { data: supabaseRooms } = await supabase
	.from('rooms')
	.select('*, participants!inner(is_owner, profiles(*))')

store.rooms = supabaseRooms?.sort((a, b) => a.participants.length - b.participants.length) || []
</script>

<template>
	<div class="page">
		<HomeHero />
		<HomeLogoCloud />
		<div class="flex gap-2">
			<SharedEmoji :size="10" emoji="bullseye" class="w-24 h-24"/>
			<SharedEmoji :size="10" emoji="joy" class="w-24 h-24" />
			<SharedEmoji :size="10" emoji="love" class="w-24 h-24" />
			<SharedEmoji :size="10" emoji="mindblown" class="w-24 h-24" />
			<SharedEmoji :size="10" emoji="onfire" class="w-24 h-24" />
			<SharedEmoji :size="10" emoji="tada" class="w-24 h-24" />
		</div>

		<div class="flex flex-col gap-12 pt-48">
			<SharedCategory class="px-5" title="Popular Live Rooms" to="rooms" :length="store.rooms?.length">
				<template v-if="store.rooms?.length">
					<SharedCardsRoom v-for="(item, idx) in store.rooms?.slice(0, 3)" :key="idx" :data="item" />
				</template>

				<template v-else>
					<USkeleton
						v-for="idx in 4" :key="idx" class="room_skeleton" :style="{ opacity: idx * 0.1 }"
						:ui="{ rounded: 'rounded-3xl' }"
					/>
				</template>
			</SharedCategory>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.room_skeleton {
	@apply h-[250px]
}
</style>
