<script lang="ts" setup>
import { messageTransition } from '~/composables/transitions/chat'
import { usePlayerStore } from '~/store/player'

const EVENTS = {
	SEEK: {
		title: 'Seeking',
		icon: 'seek',
	},
	PLAY: {
		title: 'Playing',
		icon: 'play',
	},
	PAUSE: {
		title: 'Paused',
		icon: 'pause',
	},
}

const playerStore = usePlayerStore()

const eventType = computed(() => playerStore.eventType)
</script>

<template>
	<transition :css="false" @enter="messageTransition.enter" @leave="messageTransition.leave" :duration="600">
	<span
		v-if="eventType"
		class="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm font-medium text-white/70"
	>
		<span class="mr-1">|</span>
		{{ EVENTS[eventType]?.title }}
		<media-chapter-title />
	</span>
	</transition>
</template>
