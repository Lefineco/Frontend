<script setup lang="ts">
import type { PreviewData } from '~/components/Create/Room/types'
import type { VideoPreviewContent } from '~/server/types'

const isOpen = ref(false)

const playList = ref<VideoPreviewContent[]>([
  {
    description: '2nd edition of our gratitude journal is now available for pre-order: https://shop.kurzgesagt.org/WORLDWIDE SHIPPING IS AVAILABLE!We want to get you the best ...',
    image: 'https://i.ytimg.com/vi/WPPPFqsECz0/maxresdefault.jpg',
    title: 'An Antidote to Dissatisfaction',
    video: '',
  },
  {
    description: '2nd edition of our gratitude journal is now available for pre-order: https://shop.kurzgesagt.org/WORLDWIDE SHIPPING IS AVAILABLE!We want to get you the best ...',
    image: 'https://i.ytimg.com/vi/WPPPFqsECz0/maxresdefault.jpg',
    title: 'An Antidote to Dissatisfaction',
    video: '',
  },
  {
    description: '2nd edition of our gratitude journal is now available for pre-order: https://shop.kurzgesagt.org/WORLDWIDE SHIPPING IS AVAILABLE!We want to get you the best ...',
    image: 'https://i.ytimg.com/vi/WPPPFqsECz0/maxresdefault.jpg',
    title: 'An Antidote to Dissatisfaction',
    video: '',
  },
  {
    description: '2nd edition of our gratitude journal is now available for pre-order: https://shop.kurzgesagt.org/WORLDWIDE SHIPPING IS AVAILABLE!We want to get you the best ...',
    image: 'https://i.ytimg.com/vi/WPPPFqsECz0/maxresdefault.jpg',
    title: 'An Antidote to Dissatisfaction',
    video: '',
  },
  {
    description: '2nd edition of our gratitude journal is now available for pre-order: https://shop.kurzgesagt.org/WORLDWIDE SHIPPING IS AVAILABLE!We want to get you the best ...',
    image: 'https://i.ytimg.com/vi/WPPPFqsECz0/maxresdefault.jpg',
    title: 'An Antidote to Dissatisfaction',
    video: '',
  },
  {
    description: '2nd edition of our gratitude journal is now available for pre-order: https://shop.kurzgesagt.org/WORLDWIDE SHIPPING IS AVAILABLE!We want to get you the best ...',
    image: 'https://i.ytimg.com/vi/WPPPFqsECz0/maxresdefault.jpg',
    title: 'An Antidote to Dissatisfaction',
    video: '',
  },
])
const openModal = () => isOpen.value = true

function addToList(previewData: PreviewData | null) {
  playList.value.push(previewData?.data as VideoPreviewContent)
  isOpen.value = false
}
</script>

<template>
  <div class="flex flex-col gap-2 h-full">
    <UButton icon="i-heroicons-plus-circle" size="lg" color="primary" block @click="openModal" />

    <VideoPreviewList :video-list="playList" />

    <RoomChatorPlayListPlayListAddModal v-model="isOpen" :add-to-list="addToList" />
  </div>
</template>

<style scoped>

</style>
