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
  <div class="flex items-center gap-2 rounded-md overflow-hidden bg-white/5">
    <template v-if="previewData?.data">
      <img class="w-24 aspect-video object-cover bg-white/5" :src="previewData?.data?.image" :alt="previewData?.data?.title">
      <div class="flex flex-col gap-1 py-1">
        <div class="text-lg truncate">
          {{ previewData?.data?.title }}
        </div>
        <div class="text-sm opacity-50 w-full">
          {{ previewData?.data?.description }}
        </div>
      </div>
    </template>
    <template v-else>
      <USkeleton class="w-24 h-24 aspect-video" />
      <div class="space-y-2">
        <USkeleton :ui="{ background: 'bg-white/5' }" class="h-4 w-[250px]" />
        <USkeleton :ui="{ background: 'bg-white/5' }" class="h-4 w-[200px]" />
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
