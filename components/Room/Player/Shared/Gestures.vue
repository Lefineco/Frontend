<script lang="ts" setup>
import { usePlayerStore } from '~/store/player';

const playStore = usePlayerStore()
</script>

<template>
	<div>
		<media-gesture
			class="absolute inset-0 z-0 block h-full w-full"
			event="pointerup"
			action="toggle:paused"
			@click="playStore.handlePlayPause"
			:disabled="playStore.checkState"
		/>
		<media-gesture
			class="absolute inset-0 z-0 block h-full w-full"
			event="dblpointerup"
			action="toggle:fullscreen"
		/>
		<media-gesture
			class="absolute left-0 top-0 z-10 block h-full w-1/5"
			event="dblpointerup"
			action="seek:-10"
		/>
		<media-gesture
			class="absolute right-0 top-0 z-10 block h-full w-1/5"
			event="dblpointerup"
			action="seek:10"
		/>
	</div>
</template>
