<script setup lang="ts">
import logo from '@/assets/logo.svg'

const crateRoomModal = ref(false)
</script>

<template>
  <div class="relative w-full h-52 flex flex-col items-start lg:justify-start justify-center rounded-[20px]">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
      <img class="  h-full w-full object-cover rounded-[20px]" src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80">
    </div>
    <div class="absolute flex flex-col gap-3 items-start  p-4 lg:p-8">
      <img :src="logo" class="h-5 grayscale">
      <h2 class="text-2xl font-medium">
        Watch and have fun together
      </h2>
      <p class=" text-xs lg:text-sm text-gray-500 font-bold">
        Watch alone or share with loved ones
      </p>
      <UButton icon="i-ph-plus" class="backdrop-blur-sm" variant="secondary" @click="crateRoomModal = !crateRoomModal">
        Create Room
      </UButton>
      <CreateRoom v-model="crateRoomModal" />
    </div>
  </div>
</template>
