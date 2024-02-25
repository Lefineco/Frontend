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

const isSynced = computed(() => playerStore.isSynced)
const isOwner = computed(() => playerStore.isOwner)
</script>

<template>
	<div class="flex items-center gap-2 ml-2">
		<UBadge :color="isSynced ? 'primary' : 'white'">
			{{ isSynced ? 'Synced' : 'Not Synced' }}
		</UBadge>
		<UBadge color="yellow" v-if="isOwner">
			Owner
		</UBadge>
		<transition :css="false" :duration="600" @enter="messageTransition.enter" @leave="messageTransition.leave">
			<span
				v-if="eventType"
				class="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm font-medium text-white/70"
			>
				<span class="mr-1">|</span>
				{{ EVENTS[eventType]?.title }}
				<media-chapter-title />
			</span>
		</transition>
	</div>
</template>
