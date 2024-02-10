<script setup lang="ts">
import { usePlayerStore } from '~/store/player';

const { thumbnails } = defineProps<{
	thumbnails?: string
}>()

const playerStore = usePlayerStore()
</script>

<template>
	<media-time-slider
		class="group relative mx-[7.5px] inline-flex h-10 w-full cursor-pointer touch-none select-none items-center outline-none [aria-disabled]:cursor-not-allowed"
		:disabled="!playerStore.isOwner"
	>
		<RoomPlayerSlidersSliderChapters />
		<RoomPlayerSlidersSliderThumb />
		<RoomPlayerSlidersSliderPreview :thumbnails="thumbnails">
			<div class="mt-2 text-sm" data-part="chapter-title" />
			<media-slider-value class="text-[13px]"  />
		</RoomPlayerSlidersSliderPreview>
	</media-time-slider>
</template>
