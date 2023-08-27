<script setup lang="ts">
import type { VideoPreviewContent } from '@/server/types'

const isOpen = defineModel<boolean>()
const url = ref('')
const deboundedUrl = refDebounced(url, 1000)

const previewData = ref()

function urlPreview(url: string) {
  if (!url.length)
    return null

  const { data, pending, error, refresh }
    = useFetch<VideoPreviewContent | null>('/api/video', {
      method: 'POST',
      body: JSON.stringify({
        url,
      }),
    })

  previewData.value = {
    data: data.value,
    pending: pending.value,
    error: error.value?.message,
    refresh,
  }
}
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
        <CreatePreview class="mb-4" :preview-data="previewData" />
        <div class="flex flex-col gap-4">
          <UFormGroup name="name">
            <UInput placeholder="Room Name (Optional)" />
          </UFormGroup>
          <UFormGroup name="url">
            <!-- TODO: duzenlenmesi gerek -->
            <UInput v-model="url" placeholder="Video URL" @keydown="urlPreview(deboundedUrl)" />
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
