<script setup lang="ts">
import type { Results, Video } from 'scrape-youtube'
import { availablePlatforms } from '~/constants/general'
import type { ResponseWithStatus } from '~/server/types'

const currentSearchablePlatform = ref(availablePlatforms.at(0))
const search = ref<string>('')
const isOpen = defineModel<boolean>({
	set: (v) => {
		search.value = ''
		return v
	},
})
const deboundedSearch = refDebounced(search, 1000)

const videos = ref<Results>()

const selectedVideos = ref<Video[]>([])

watch([deboundedSearch], async () => {
	videos.value = undefined
	selectedVideos.value = []

	if (!deboundedSearch.value || !isOpen.value)
		return

	const { data } = await useLazyAsyncData<ResponseWithStatus<Results>>('videos', () => $fetch('/api/third/youtube/query', {
		query: { search: deboundedSearch.value },
	}))

	videos.value = data.value?.data
})

function handleVideoSelection(item: Video) {
	const selectedVideoIndex = selectedVideos.value.indexOf(item)
	if (selectedVideoIndex !== -1)
		return selectedVideos.value.splice(selectedVideoIndex, 1)

	selectedVideos.value = [...selectedVideos.value, item]
}
</script>

<template>
	<Teleport to="body">
		<UModal v-model="isOpen">
			<UCard
				:ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800/50', body: { padding: 'sm:pb-4 px-0 sm:px-0 sm:py-0 flex flex-col h-full justify-between' } }"
			>
				<div class="flex gap-2 items-center px-4">
					<UInput
						v-model="search" class="w-full" icon="i-ph-magnifying-glass-bold"
						placeholder="Search, Video or Movie" size="sm"
					/>
					<USelectMenu
						v-model="currentSearchablePlatform" :options="availablePlatforms"
						placeholder="Platform"
					/>
				</div>

				<RoomSearchItems v-if="videos?.videos.length" :data="videos" :selects="selectedVideos" @select="handleVideoSelection" />
				<RoomSearchSkeleton v-else-if="deboundedSearch && !videos" />
				<RoomSearchEmpty v-else-if="search && deboundedSearch" />

				<div class="w-full h-12 px-2 flex items-center justify-end  border-t border-white/10" v-if="selectedVideos.length">
					<UButton variant="soft" class="w-full justify-center" color="white"> Continue </UButton>
				</div>
			</UCard>
		</UModal>
	</Teleport>
</template>
