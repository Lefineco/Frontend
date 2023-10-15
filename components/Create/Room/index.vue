<script setup lang="ts">
import type { PreviewData } from './types'
import type { VideoPreviewContent } from '~/server/types'
import { checkVideoPlatform } from '@/composables/helper'
import type { RoomSchema } from '~/server/validation'
import { useJoinRoom } from '@/composables/service/room'

const isOpen = defineModel<boolean>()
const url = ref('')
const deboundedUrl = refDebounced(url, 1000)
const previewData = ref<PreviewData | null>(null)

const router = useRouter()
const user = useSupabaseUser()

const previewVideo = watch([deboundedUrl], async () => {
  previewData.value = null

  if (!checkVideoPlatform(url.value))
    return null

  const { data, pending, error, refresh }
    = await useFetch<VideoPreviewContent | null>('/api/scrape/video', {
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

const watchOpen = watch([isOpen], (isOpen) => {
  if (isOpen) {
    url.value = ''
    previewData.value = null
  }
})

const values = ref<Partial<RoomSchema>>({
  title: undefined,
  url: undefined,
})

async function createRoom() {
  const { data } = await useFetch('/api/create/room', {
    method: 'POST',
    body: JSON.stringify({
      ...previewData.value?.data,
      title: values.value.title || previewData.value?.data?.title,
    }),
  })

  if (data.value) {
    isOpen.value = false
    await useJoinRoom(
      (data.value.data as any)?.id,
      user.value?.id as string,
      true,
    )
    router.push(`/rooms/${(data.value.data as any).id}`)
  }
}

onUnmounted(() => {
  previewVideo()
  watchOpen()
})
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
        <CreateRoomPreview
          v-if="deboundedUrl && checkVideoPlatform(deboundedUrl)"
          class="mb-4"
          :preview-data="previewData"
        />
        <UForm :state="values">
          <div class="flex flex-col gap-4">
            <UFormGroup name="title">
              <UInput placeholder="Room Name (Optional)" />
            </UFormGroup>
            <UFormGroup name="url">
              <UInput v-model="url" placeholder="Video URL" />
            </UFormGroup>
            <UButton
              class="disabled:!opacity-50 disabled:!cursor-not-allowed"
              block
              label="Create Room"
              :disabled="
                Boolean(
                  !url.length
                    || !deboundedUrl
                    || !previewData?.data
                    || !checkVideoPlatform(url),
                )
              "
              :loading="
                Boolean(
                  url.length
                    && deboundedUrl
                    && checkVideoPlatform(url)
                    && !previewData?.data,
                )
              "
              @click="createRoom"
            />
          </div>
        </UForm>
      </UCard>
    </UModal>
  </Teleport>
</template>
