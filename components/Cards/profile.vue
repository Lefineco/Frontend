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
  <div class=" relative w-[400px] h-[160px] flex flex-col items-center justify-center  rounded-[20px]">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
      <img class="  h-full w-full object-cover rounded-[20px]" src="../../assets/testimage.svg">
    </div>
    <div class="absolute w-full flex justify-between bottom-1 py-2 px-5">
      <div class="flex items-center justify-center gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xl" />
        <div class="flex flex-col">
          <span class="text-sm">{{ name }}</span>
          <span class="text-xs text-gray-500 font-bold">Recommended</span>
        </div>
      </div> 
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
