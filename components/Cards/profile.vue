<script setup lang="ts">
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
</script>

<template>
  <div class=" relative w-full h-[230px] lg:w-[400px]  lg:h-[160px]  flex flex-col items-center justify-center  rounded-[20px]">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
      <img class="  h-full w-full object-cover rounded-[20px]" src="../../assets/testimage.svg">
    </div>
    <div class="absolute w-full flex-col flex  md:flex-row justify-between bottom-1 py-2 px-5">
      <div class="flex flex-col md:flex-row items-center justify-center gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xl" />
        <div class="flex flex-col items-center md:items-start">
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
      <UButton class="m-3" size="xs" variant="solid">
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
