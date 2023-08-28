<script setup lang="ts">
import type { PreviewData } from './types'
import type { VideoPreviewContent } from '~/server/types'

const youtubeRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
const vimeoRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/)([0-9]+)(?:\/)?$/

function checkVideoPlatform(url: string): string | undefined | null {
  if (url.length)
    return null

  if (youtubeRegExp.test(url))
    return url.match(youtubeRegExp)?.[1]
  else if (vimeoRegExp.test(url))
    return url.match(vimeoRegExp)?.[1]

  return null
}

const isOpen = defineModel<boolean>()
const url = ref('')
const deboundedUrl = refDebounced(url, 2000)
const previewData = ref<PreviewData | null>(null)

const previewVideo = watch([deboundedUrl], async () => {
  if (checkVideoPlatform(url.value)?.length && (url.value === deboundedUrl.value))
    return null

  const { data, pending, error, refresh } = await useFetch<VideoPreviewContent | null>('/api/video', {
    method: 'POST',
    body: JSON.stringify({
      url: deboundedUrl.value,
    }),
  })

  previewData.value = {
    data: data.value,
    pending: pending.value,
    error: error.value?.message,
    refresh,
  }
})

onUnmounted(previewVideo)
</script>

<template>
  <Teleport to="body">
    <UModal id="video" v-model="isOpen" class="relative">
      <UCard
        :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Create Room
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <CreateVideoPreview v-if="deboundedUrl" class="mb-4" :preview-data="previewData" />
        <div class="flex flex-col gap-4">
          <UFormGroup name="name">
            <UInput placeholder="Room Name (Optional)" />
          </UFormGroup>
          <UFormGroup name="url">
            <UInput v-model="url" placeholder="Video URL" />
          </UFormGroup>
          <UButton
            class="disabled:!opacity-50 disabled:!cursor-not-allowed"
            block
            label="Create Room"
            :disabled="!url"
          />
        </div>
      </UCard>
    </UModal>
  </Teleport>
</template>
