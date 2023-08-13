<script setup lang="ts">
import logo from '@/assets/logo.svg'

interface Props {
  name: string
  avatar: string
  source: string
  viewers: string
}
// defineProps<Props>()

withDefaults(defineProps<Props>(), {
  name: 'Berke',
  avatar: '',
  source: '',
  viewers: '',
})

const crateVideoModal = ref(false)
</script>

<template>
  <div class="relative w-full h-52 flex flex-col items-start lg:justify-start justify-center rounded-[20px]">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
      <img class="  h-full w-full object-cover rounded-[20px]" src="../../assets/testimage.svg">
    </div>
    <div class="absolute flex flex-col gap-3 items-start  p-4 lg:p-8">
      <img :src="logo" class="lg:h-9 h-7">
      <h2 class="text-2xl font-medium">
        Watch and have fun together
      </h2>
      <p class=" text-xs lg:text-sm text-gray-500 font-bold">
        Watch alone or share with loved ones
      </p>
      <UButton icon="i-ph-plus" size="xs" class="backdrop-blur-sm" variant="secondary" @click="crateVideoModal = !crateVideoModal">
        Start Follow
      </UButton>
      <CreateVideo v-model="crateVideoModal" />
    </div>
  </div>
</template>

<style scoped>
 .custom-gradient {
  background: black;
  opacity: 0.4;
 }
</style>
