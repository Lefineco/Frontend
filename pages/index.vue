<script setup lang="ts">
import { EMPTY_UUID } from '~/constants/general'
import type { Database } from '~/server/types/supabase'
import type { DiscoverAPI, GenresAPI } from '~/server/types/tmbd'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const store = useGeneralStore()

export type SupabaseRooms = typeof supabaseRooms
export type SupabaseLefiner = typeof supabaseLefiner

const { data: supabaseRooms } = await supabase
	.from('rooms')
	.select('*, participants!inner(is_owner, profiles(*))')

const { data: supabaseLefiner } = await supabase
	.from('profiles')
	.select('*, follows!follows_following_id_fkey(follower_id)')
	.neq('full_name', null)
	.neq('id', (user.value?.id || EMPTY_UUID))

const { data: movie } = await useFetch<DiscoverAPI>('/api/third/tmbd/discover')

const { data: genres } = await useFetch<GenresAPI>('/api/third/tmbd/genres')

store.setAll({
	rooms: supabaseRooms?.sort((a, b) => a.participants.length - b.participants.length) || [],
	lefiners: supabaseLefiner?.sort((a, b) => b.follows.length - a.follows.length) || [],
	genres: genres.value?.data || [],
	movies: movie.value?.data || [],
})
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
				</template>

				<template v-else>
					<USkeleton v-for="idx in 4" :key="idx" class="room_skeleton" :style="{ opacity: idx * 0.1 }" :ui="{ rounded: 'rounded-3xl' }" />
				</template>
			</SharedCategory>

			<SharedCategory class="px-5" title="Popular Movies" to="movies" :length="store.lefiners?.length">
				<SharedCardsMovie
					v-for="(item, idx) in store.movies?.slice(0, 4)"
					:key="idx"
					:data="item"
				/>
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
