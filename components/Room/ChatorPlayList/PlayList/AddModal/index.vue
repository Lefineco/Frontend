<script setup lang="ts">
import useVideo from '@/composables/service/video'
import type { PreviewData } from '~/components/Create/Room/types'

interface Props {
  addToList: (preview: PreviewData | null) => void
}

const { addToList } = defineProps<Props>()

const { url, previewData } = useVideo()

const isOpen = defineModel<boolean>()

function handleAddVideo() {
  addToList(previewData.value)
  url.value = ''
}
</script>

<template>
  <Teleport to="body">
    <UModal id="video" v-model="isOpen" class="relative">
      <UCard
        :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
      >
        <template #header>
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Add a new to playlist
          </h3>
        </template>

        <CreateRoomPreview class="mb-4" :preview-data="previewData" />

        <div class="flex flex-col gap-4">
          <UFormGroup name="url">
            <UInput v-model="url" placeholder="Video URL" />
          </UFormGroup>

          <UButton
            class="disabled:!opacity-50 disabled:!cursor-not-allowed"
            block
            label="Add"
            :disabled="!url || !previewData?.data"
            :loading="!!previewData?.pending"
            @click="handleAddVideo"
          />
        </div>
      </UCard>
    </UModal>
  </Teleport>
</template>

<style scoped>

</style>
