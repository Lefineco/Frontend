<script lang="ts" setup>
import 'vidstack/player/styles/base.css'
import 'vidstack/player'
import 'vidstack/player/ui'
import 'vidstack/icons'

import { type MediaCanPlayEvent, MediaRemoteControl } from 'vidstack'
import type { MediaPlayerElement } from 'vidstack/elements'
import { usePlayerStore } from '~/store/player'

export interface PlayerListenEvents { play: boolean, currentTime: number, seekableEnd: number }

const props = defineProps<{
	id: string | null
	type: string | undefined
	thumbnail: string | undefined | null
	onChange?: (event: PlayerListenEvents) => void
}>()

let src: string

const $player = ref<MediaPlayerElement>()

const playerStore = usePlayerStore()
const brandColor = computed(() => playerStore.isSynced ? '#8b5cf6' : 'rgba(255, 255, 255, 0.5)') // TODO: if player not ready, change color to gray

const remote = new MediaRemoteControl()

switch (props.type) {
	case 'VIMEO':
		src = `https://player.vimeo.com/video/${props.id}`
		break

	case 'YOUTUBE':
		src = `https://www.youtube.com/embed/${props.id}`
		break
}

async function onCanPlay(event: MediaCanPlayEvent) {
	$player.value?.subscribe(({ playing, currentTime, seekableEnd }) => {
		if (props.onChange)
			props.onChange({ play: playing, currentTime, seekableEnd })
	})

	remote.setPlayer(event.target)
	playerStore.remote = remote
}

onUnmounted(() => {
	$player.value?.destroy()
})
</script>

<template>
	<media-player
		v-if="src" ref="$player" class="media-player" :src="src" :picture-in-picture="false"
		@can-play="onCanPlay" @seeked="() => playerStore.setEventType('SEEK')"
	>
		<media-provider>
			<media-poster
				class="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
				:src="thumbnail"
			/>
		</media-provider>

		<RoomPlayerSharedLayout />
	</media-player>
</template>

<style lang="postcss">
.media-player {
	@apply w-full bg-slate-900 text-white font-sans rounded-2xl ring-media-focus data-[focus]:ring-4 border border-white/10 overflow-hidden;
}

.bg-media-brand {
	background: v-bind(brandColor);
}
</style>
