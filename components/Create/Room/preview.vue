<script setup lang="ts">
import type { PreviewData } from './types'

interface Props {
  previewData: PreviewData | null
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-2 rounded-md overflow-hidden bg-white/5">
    <template v-if="previewData?.data">
      <img class="w-24 h-20 aspect-video object-cover bg-white/5" :src="previewData?.data?.image" :alt="previewData?.data?.title">
      <div class="flex flex-col space-y-2 pl-2">
        <div class="text-lg w-72 truncate capitalize">
          {{ previewData?.data?.title }}
        </div>
        <div class="text-sm opacity-50 w-72 truncate">
          {{ previewData?.data?.description }}
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
