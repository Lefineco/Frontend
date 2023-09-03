<script setup lang="ts">
import type { Platform } from '~/server/types'

interface Props {
  data: {
    title: string
    description: string
    thumbnail: string
    url: string
    platform: Platform
    participants: any[]
  }
}

defineProps<Props>()
</script>

<template>
  <button class="transition-transform duration-300 w-90 h-90 flex flex-col items-center justify-center active:scale-90">
    <div class="w-full flex justify-between py-2 px-2">
      <div class="flex items-center justify-center gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="sm" /><span class="text-sm font-medium">{{ data.title }}</span>
      </div>
      <!-- <img src="../../assets/youtube.svg"> -->
    </div>
    <div class="relative w-full">
      <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
        <img class="w-full h-full object-cover rounded-[20px] " :src="data.thumbnail">
      </div>
      <UAvatarGroup class="absolute bottom-5 right-5 -space-x-1" size="sm" :max="3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
        <UAvatar src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
        <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
        <UAvatar src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
      </UAvatarGroup>
    </div>
  </button>
</template>
