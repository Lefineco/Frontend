<script setup lang="ts">
import type { PreviewData } from './types'
import type { VideoPreviewContent } from '~/server/types'
import { checkVideoPlatform } from '@/composables/helper'

const isOpen = defineModel<boolean>()
const url = ref('')
const deboundedUrl = refDebounced(url, 1000)
const previewData = ref<PreviewData | null>(null)

const previewVideo = watch([deboundedUrl], async () => {
  previewData.value = null

  if (!checkVideoPlatform(url.value))
    return null

  const { data, pending, error, refresh } = await useFetch<VideoPreviewContent | null>('/api/video', {
    method: 'POST',
    body: JSON.stringify({
      url: url.value,
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
        :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800/50' }"
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
        <CreateRoomPreview v-if="deboundedUrl && checkVideoPlatform(url)" class="mb-4" :preview-data="previewData" />
        <UForm>
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
              :disabled="Boolean(!url.length || !deboundedUrl || !previewData?.data || !checkVideoPlatform(url))"
              :loading="Boolean(url.length && deboundedUrl && checkVideoPlatform(url) && !previewData?.data)"
            />
          </div>
        </UForm>
      </UCard>
    </UModal>
  </Teleport>
</template>
