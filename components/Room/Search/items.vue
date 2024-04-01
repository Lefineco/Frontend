<script setup lang="ts">
import type { Results, Video } from 'scrape-youtube'
import { useImageIsLoaded } from '~/composables/helper'

interface Props {
	data: Results
	onSelect: (item: Video) => void
	selects: Video[]
}

const { data, selects } = defineProps<Props>()

async function checkImage(thumbnail: string) {
	const img = document.createElement('img')

	img.src = thumbnail

	return useImageIsLoaded(thumbnail || '')
}

const isSelected = (id: string) => selects.find(i => i.id === id)
</script>

<template>
	<div class="h-full flex flex-col items-center text-white/30 max-h-64 overflow-auto pt-2 px-4 gap-1">
		<UButton
			v-for="item in data.videos" :key="item.id" :variant="isSelected(item.id) ? 'soft' : 'ghost'"
			:color="isSelected(item.id) ? 'blue' : 'white'" :data-video-duration="item.durationString"
			class="w-full flex relative !gap-4 after:content-[attr(data-video-duration)] after:absolute after:bg-primary-500 after:z-10 after:bottom-2 after:px-1 after:rounded-full after:left-1 after:text-white after:text-xs"
			@click="() => onSelect(item)"
		>
			<NuxtImg
				class="size-12 object-cover rounded-lg"
				:src="Boolean(checkImage(item.thumbnail)) ? item.thumbnail : 'room_thumbnail.png'" quality="10"
				loading="lazy" preload
			/>

			<div class="w-full flex flex-col items-start h-full text-left overflow-hidden">
				<span class="capitalize text-xs truncate w-full text-white">
					{{ item.title }}
				</span>
				<span class="text-xs text-white/50 truncate w-full">
					{{ item.description }}
				</span>
			</div>
		</UButton>
	</div>
</template>
