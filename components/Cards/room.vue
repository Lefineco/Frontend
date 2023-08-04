<script setup lang="ts">
interface Props {
  name: string
  avatar: string
  feature: string
}
// defineProps<Props>()

withDefaults(defineProps<Props>(), {
  name: '',
  avatar: '',
  feature: '',

})
</script>

<template>
  <div class="w-[300px] h-[300px] flex flex-col items-center justify-center">
    <div class="w-full flex justify-between py-2 px-2">
      <div class="flex items-center justify-center gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="sm" /><span class="text-sm">{{ name }}</span>
      </div>
      <img src="../../assets/youtube.svg">
    </div>
    <div class="relative w-full ">
      <div class="custom-gradient rounded-[20px]">
        <img class="w-full h-full   object-cover rounded-[20px] " src="../../assets/testimage.svg">
      </div>
      <UAvatarGroup class="absolute bottom-4 right-1 px-3" size="sm" max="4">
        <UAvatar class=" border border-1 border-solid border-blue-500 !border-opacity-[0.4]" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
        <UAvatar class=" border border-1 border-solid border-blue-500 !border-opacity-[0.4]" src="https://avatars.githubusercontent.com/u/904724?v=4" alt="Atinux" />
        <UAvatar class=" border border-1 border-solid border-blue-500 !border-opacity-[0.4]" src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
        <UAvatar class=" border border-1 border-solid border-blue-500 !border-opacity-[0.4]" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="benjamincanac" />
        <UAvatar class=" border border-1 border-solid border-blue-500 !border-opacity-[0.4]" src="https://avatars.githubusercontent.com/u/7547335?v=4" alt="smarroufin" />
      </UAvatarGroup>
    </div>
  </div>
</template>

<style scoped>
 .custom-gradient {
  background: black;
  opacity: 0.4;
 }
</style>
