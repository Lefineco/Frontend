<script setup lang="ts">
import type { VideoPreviewContent } from '~/server/types'

interface Props {
  videoList: VideoPreviewContent[]
}

defineProps<Props>()
</script>

<template>
  <div class="relative">
    <ul class="flex flex-col gap-2 h-full overflow-y-scroll shadow-[inset_0px_-20px_20px_0px_#1a202c] no-scrollbar">
      <li v-for="item in videoList" :key="item.video">
        <VideoPreview :preview-data="item" />
      </li>
    </ul>

    <UIcon name="i-heroicons-chevron-down" class="absolute bottom-0 left-1/2 -translate-x-1/2" />
  </div>
</template>
