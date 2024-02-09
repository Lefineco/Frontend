<script lang="ts" setup>
import 'vidstack/player/styles/base.css'
import 'vidstack/player'
import 'vidstack/player/ui'
import 'vidstack/icons'

import { type MediaCanPlayEvent, type MediaProviderChangeEvent, isHLSProvider } from 'vidstack'
import type { MediaPlayerElement } from 'vidstack/elements'

const props = defineProps<{
	id: string | null
	type: string | undefined
}>()

let src: string

switch (props.type) {
	case 'VIMEO':
		src = `https://player.vimeo.com/video/${props.id}`
		break

	case 'YOUTUBE':
		src = `https://www.youtube.com/embed/${props.id}`
		break
}


const $player = ref<MediaPlayerElement>()

function onProviderChange(event: MediaProviderChangeEvent) {
	const provider = event.detail
	// We can configure provider's here.
	if (isHLSProvider(provider))
		provider.config = {}
}

// We can listen for the `can-play` event to be notified when the player is ready.

function onCanPlay(event: MediaCanPlayEvent) {
	// eslint-disable-next-line no-console
	console.log('The player is ready to play', event)
}

onUnmounted(() => {
	$player.value?.destroy()
})
</script>

<template>
	<media-player
		ref="$player"
		keep-alive class="media-player"
		v-if="src"
		:src="src"
		@provider-change="onProviderChange" @can-play="onCanPlay"
	>
		<media-provider>
			<media-poster
				class="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
			/>
		</media-provider>

		<RoomPlayerSharedLayout />
	</media-player>
</template>

<style lang="postcss">
.media-player {
	@apply w-full bg-slate-900 text-white font-sans rounded-2xl ring-media-focus data-[focus]:ring-4;
}

.bg-media-brand {
	@apply bg-primary-400
}
</style>
