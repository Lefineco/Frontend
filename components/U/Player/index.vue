<script setup lang="ts">
import Plyr from 'plyr'
import type { Options } from 'plyr/src/js/plyr'

// eslint-disable-next-line antfu/no-import-node-modules-by-path
import type { IframeHTMLAttributes } from '../../../node_modules/nuxt/dist/app/compat/vue-demi'

interface Props {
  videoId: string | null
  type: 'YOUTUBE' | 'VIMEO'
  playerOptions?: Options
  iframeOptions?: IframeHTMLAttributes
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

onMounted(() => {
  const player = new Plyr(videoRef.value as HTMLDivElement, {
    settings: ['quality', 'speed'],
    controls: [
      'play-large', // The large play button in the center
      'restart', // Restart playback
      'play', // Play/pause playback
      'progress', // The progress bar and scrubber for playback and buffering
      'current-time', // The current time of playback
      'duration', // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      'settings', // Settings menu
      'fullscreen', // Toggle fullscreen
    ],
  })

  playerRef.value = player
})
</script>

<template>
  <div class="overflow-hidden relative wrapper">
    <div ref="videoRef" class="plyr__video-embed">
      <iframe
        allowfullscreen
        allowtransparency
        :src="src"
        :="props.iframeOptions"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  --plyr-color-main: theme(colors.violet.500);
}
</style>
