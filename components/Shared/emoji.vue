<script lang="ts" setup>
import { type Alignment, Fit } from '@rive-app/canvas'
import { Layout, Rive } from '@rive-app/canvas'

const props = defineProps<Props>()


interface Props {
	alignment?: Alignment
	emoji: string
	preview?: boolean
}

const canvas = ref<HTMLCanvasElement>()

let r: Rive

function rive() {
	r = new Rive({
		canvas: canvas.value as HTMLCanvasElement,
		src: '/emoji.riv',
		layout: new Layout({
			fit: Fit.Fill,
			alignment: props.alignment,
		}),
		artboard: props.emoji,
		autoplay: false,
		stateMachines: 'controller',
		onLoad: () => {
			r.play('Reveal')
		},
	})
}

function handleStart() {
	if(!props.preview)
		r.play('Hover')
}

function handleStop() {
	r.play('No_hover')

	r.play('play')
}

onMounted(() => {
	rive()
})
</script>

<template>
	<canvas ref="canvas" @mouseenter="handleStart" @mouseleave="handleStop" />
</template>
