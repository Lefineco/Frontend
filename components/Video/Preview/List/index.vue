<script setup lang="ts">
import type { VideoPreviewContent } from '~/server/types'

interface Props {
  videoList: VideoPreviewContent[]
}

defineProps<Props>()
</script>

<template>
  <ul class="flex flex-col gap-2 h-full overflow-y-scroll">
    <li v-for="item in videoList" :key="item.video">
      <VideoPreview :preview-data="item" />
    </li>
  </ul>

  <!-- <UIcon name="i-heroicons-chevron-down" class="absolute bottom-0 left-1/2 -translate-x-1/2" /> -->
</template>
