<script setup lang="ts">
import type { VideoPreviewContent } from 'server/types'

interface Props {
  previewData: {
    data: VideoPreviewContent | null
    pending: boolean
    error: string | undefined
    refresh: () => void
  } | null
}

defineProps<Props>()
</script>

<template>
  <div v-if="previewData?.pending" class="flex gap-2 rounded-md overflow-hidden bg-white/5">
    <img class="w-24 aspect-video object-cover" :src="previewData?.data?.image" :alt="previewData?.data?.title">
    <div class="flex flex-col gap-1 py-1">
      <div class="text-xl truncate">
        {{ previewData?.data?.title }}
      </div>
      <div class="text-sm opacity-50 w-full">
        {{ previewData?.data?.description }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
