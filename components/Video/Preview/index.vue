<script setup lang="ts">
import type { VideoPreviewContent } from '~/server/types'

interface Props {
  previewData: VideoPreviewContent | null
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-2 rounded-md overflow-hidden bg-white/5">
    <template v-if="previewData">
      <img class="w-24 h-20 aspect-video object-cover bg-white/5" :src="previewData?.image" :alt="previewData?.title">
      <div class="flex flex-col space-y-2 pl-2">
        <div class="text-lg w-72 truncate capitalize">
          {{ previewData?.title }}
        </div>
        <div class="text-sm opacity-50 w-72 truncate">
          {{ previewData?.description }}
        </div>
      </div>
    </template>
    <template v-else>
      <USkeleton class="w-24 h-20 aspect-video" />
      <div class="space-y-2 pl-2">
        <USkeleton :ui="{ background: 'bg-white/5' }" class="h-4 w-[250px]" />
        <USkeleton :ui="{ background: 'bg-white/5' }" class="h-4 w-[200px]" />
      </div>
    </template>
  </div>
</template>
