<script setup lang="ts">
interface Props {
  name?: string
  avatar?: string
  source?: string
  viewers?: string
}
// defineProps<Props>()

withDefaults(defineProps<Props>(), {
  name: '',
  avatar: '',
  source: '',
  viewers: '',
})
</script>

<template>
  <div class=" relative w-full h-[230px] lg:w-[400px]  lg:h-[160px]  flex flex-col items-center justify-center  rounded-[20px]">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
      <img class="  h-full w-full object-cover rounded-[20px]" src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80">
    </div>
    <div class="absolute max-lg:items-center w-full flex-col flex  lg:flex-row justify-between bottom-1 py-2 px-5">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xl" />
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm">{{ name }}</span>
          <span class="text-xs text-gray-500  font-bold">Recommended</span>
        </div>
      </div>
      <!-- <div class="flex flex-col md:flex-row items-center justify-center gap-3">
        <UAvatar :ui="{ size: { custom: ' md:w-24 h-24' } }" src="https://avatars.githubusercontent.com/u/739984?v=4" size="custom" />
        <div class="flex flex-col items-center md:items-start">
          <span class="text-sm">{{ name }}</span>
          <span class="text-xs text-gray-500  font-bold">Recommended</span>
        </div>
      </div> -->
      <UButton :ui="{ size: { custom: 'text-xs' }, gap: { custom: 'max-lg:gap-x-2 lg:gap-x-2.5' }, padding: { custom: 'max-lg:px-12 py-1.5 lg:px-4 py-2' } }" class="m-3 backdrop-blur-sm " variant="secondary" size="custom">
        Follow
      </UButton>
    </div>
  </div>
</template>

<style scoped>
 .custom-gradient {
  background: black;
  opacity: 0.4;
 }
</style>
