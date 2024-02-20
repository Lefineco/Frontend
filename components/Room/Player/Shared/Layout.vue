<script setup lang="ts">
import { joinTransition } from '~/composables/transitions/player';
import { usePlayerStore } from '~/store/player'

const { thumbnails } = defineProps<{
	thumbnails?: string
}>()

const playerStore = usePlayerStore()
</script>

<template>
	<TransitionGroup :css="false" @enter="joinTransition.enter" @leave="joinTransition.leave">
		<template v-if="playerStore.isJoined">
			<RoomPlayerSharedGestures />
			<RoomPlayerSharedCaptions />
	
			<media-controls
				class="media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity"
			>
				<div class="flex-1" />
				<media-controls-group class="flex w-full items-center px-2">
					<RoomPlayerSlidersTimeSlider :thumbnails="thumbnails" />
				</media-controls-group>
				<media-controls-group class="-mt-0.5 flex w-full items-center px-2 pb-2">
					<RoomPlayerActionsPlayButton tooltip-placement="top start" />
					<RoomPlayerActionsMuteButton tooltip-placement="top" />
					<RoomPlayerSlidersVolumeSlider />
					<RoomPlayerSharedTimeGroup />
					<RoomPlayerSharedEventsListener />
					<div class="flex-1" />
					<RoomPlayerActionsCaptionButton tooltip-placement="top" />
					<RoomPlayerActionsPIPButton tooltip-placement="top" />
					<RoomPlayerActionsFullscreenButton tooltip-placement="top end" />
				</media-controls-group>
			</media-controls>
		</template>
		<div v-else class="join-room">
			<UButton
				size="xl" color="white" variant="soft" class="rounded-full border border-white/10"
				@click="playerStore.setJoined"
			>
				Join Room
			</UButton>
		</div>
	</TransitionGroup>
</template>

<style lang="postcss" scoped>
media-controls {
    /* These CSS variables are supported out of the box to easily apply offsets to all tooltips/menus.  */
    --media-tooltip-y-offset: 30px;
    --media-menu-y-offset: 30px;
}

media-controls :deep(media-volume-slider) {
    --media-slider-preview-offset: 30px;
}

.join-room {
	@apply inset-0 z-10 absolute bg-gradient-to-b from-transparent to-black backdrop-blur-xl pointer-events-auto flex items-center justify-center rounded-2xl;
}
</style>
