<script setup lang="ts">
import { useElementSize } from '@vueuse/core'

const crateVideoModal = ref(false)
const player = ref()

const { height } = useElementSize(player)
</script>

<template>
  <div class="page h-full flex flex-col w-full">
    <div class="flex justify-between w-full">
      <div class="flex flex-col lg:flex-row items-center pb-4 gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xl" />
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm">Berke</span>
          <span class="text-xs text-gray-500  font-bold">Recommended</span>
        </div>
      </div>
      <div class="flex items-center justify-center gap-2 ">
        <UAvatarGroup size="sm" :max="3">
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
          <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
          <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
          <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
        </UAvatarGroup>
        <UButton class="!text-gray-600" :ui="{ size: { custom: 'text-4xl' } }" variant="ghost" size="custom" icon="i-ph-plus-circle" @click="crateVideoModal = !crateVideoModal" />
      </div>
    </div>
    <div class="flex w-full gap-4">
      <div class="w-3/5">
        <!-- <UPlayer type="YOUTUBE" video-id="wmP3MBjsx20" /> -->
        <UPlayer ref="player" type="VIMEO" video-id="76979871" />
      </div>
      <div v-if="height" class="w-2/5" :style="{ height: `${height}px` }">
        <RoomChatorPlayList />
      </div>
      <div v-else class="h-full w-2/5">
        <USpin />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
