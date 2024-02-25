<script setup lang="ts">
import type { Database } from '~/server/types/supabase'
import type { DiscoverAPI } from '~/server/types/tmbd';
import { useGeneralStore } from '~/store'

const store = useGeneralStore()

if (!store.rooms?.length) {
	const { data: movies } = await useFetch<DiscoverAPI>('/api/third/tmbd/discover')

	store.movies = movies.value?.data || []
}
</script>

<template>
	<div class="page">
		<SharedCategory class="p-5" title="All Live Rooms" to="rooms" all>
			<SharedCardsMovie v-for="(item, idx) in store.movies" :key="idx" :data="item" />
		</SharedCategory>
	</div>
</template>
