<script setup lang="ts">
import type { TooltipPlacement } from 'vidstack'
import { usePlayerStore } from '~/store/player'

const { tooltipPlacement } = defineProps<{
	tooltipPlacement: TooltipPlacement
}>()

const playerStore = usePlayerStore()
</script>

<template>
	<RoomPlayerSharedTooltip :placement="tooltipPlacement" v-if="playerStore.isSynced">
		<template #trigger>
			<media-play-button
				class="ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 disabled:opacity-50"
				:disabled="playerStore.checkState" @click="playerStore.handlePlayPause">
				<media-icon class="media-paused:block hidden h-8 w-8" type="play" />
				<media-icon class="media-paused:hidden h-8 w-8" type="pause" />
			</media-play-button>
		</template>

		<template #content>
			<span class="media-paused:block hidden">Play</span>
			<span class="media-paused:hidden">Pause</span>
		</template>
	</RoomPlayerSharedTooltip>
	
	<RoomPlayerSharedTooltip :placement="tooltipPlacement" v-else>
		<template #trigger>
			<media-toggle-button
				class="group relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset ring-sky-400 hover:bg-white/20 data-[focus]:ring-4"
				aria-label="Be sync" @click="playerStore.handleSync">
				<media-icon type="repeat-square-on" class="h-8 w-8" />
			</media-toggle-button>
		</template>

		<template #content>
			<span>Sync</span>
		</template>
	</RoomPlayerSharedTooltip>
</template>
