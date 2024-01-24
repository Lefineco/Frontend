<script setup lang="ts">
import type { Undefinable } from '@0fatihyildiz/fast-ts-utilities'

import Plyr from 'plyr'
import type { Options } from 'plyr/src/js/plyr'

// eslint-disable-next-line antfu/no-import-node-modules-by-path, antfu/no-import-dist
import type { IframeHTMLAttributes } from '../../../node_modules/nuxt/dist/app/compat/vue-demi'

interface Props {
	videoId: string | null
	type: Undefinable<string>
	playerOptions?: Options
	iframeOptions?: IframeHTMLAttributes
	isOwner?: boolean
}

const props = defineProps<Props>()
let src: string

switch (props.type) {
	case 'VIMEO':
		src = `https://player.vimeo.com/video/${props.videoId}`
		break

	case 'YOUTUBE':
		src = `https://www.youtube.com/embed/${props.videoId}`
		break
}

const videoRef = ref<HTMLDivElement | null>(null)
const playerRef = ref<Plyr | null>(null)

function getPlayerInstance() {
	return playerRef.value
}

defineExpose({
	getPlayerInstance,
})

const PERMISSIONS = {
	owner: [
		// 'play-large',
		'play',
		'progress',
		'current-time',
		'duration',
		'mute',
		'volume',
		'fullscreen',
	],

	participant: [
		'play',
		'volume',
		'mute',
		'current-time',
		'duration',
	],
}

onMounted(() => {
	const player = new Plyr(videoRef.value as HTMLDivElement, {
		settings: ['quality', 'speed'],
		controls: PERMISSIONS[props.isOwner ? 'owner' : 'participant'],
	})

	playerRef.value = player
})
</script>

<template>
	<div class="plyr__container">
		<div ref="videoRef" class="plyr__video-embed">
			<iframe allowfullscreen allowtransparency :src="src" v-bind="props.iframeOptions" />
		</div>
	</div>
</template>

<style lang="postcss">
.plyr__container {
	--plyr-color-main: theme(colors.violet.500);

	.plyr {
		@apply w-full h-full;
	}
}
</style>
