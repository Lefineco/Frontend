<script setup lang="ts">
import Vimeo from '@vimeo/player'
import { onMounted } from 'vue'

onMounted(() => {
  const iframe = document.querySelector('iframe')
  if (!iframe)
    return
  const player = new Vimeo(iframe)
  player.getPictureInPicture().then((supported) => {
    if (supported)
      player.requestPictureInPicture()
  })
  player.setVolume(0)
  player.setLoop(true)
  player.setCurrentTime(40)
  player.play()
})
</script>

<template>
  <div class="relative p-[21vw] lg:-mt-36 bg-black h-56 bg-black mx-auto w-full">
    <iframe
      src="https://player.vimeo.com/video/871122886?h=bdd8c927a7&autoplay=1&loop=1&title=0&byline=0&portrait=0"
      frameborder="0"
      class="absolute bg-black top-0 left-0 w-full h-full"
    />
    <div class="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm" />
    <div class="absolute inset-0 bg-gradient-to-t from-black" />
  </div>
</template>
