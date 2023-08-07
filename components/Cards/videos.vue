<script setup lang="ts">
interface Props {
  avatar: string
  feature: string
}

withDefaults(defineProps<Props>(), {
  name: '',
  avatar: '',
  feature: '',

})
</script>

<template>
  <div class="w-72 flex flex-col relative justify-start">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60">
      <img class="w-full h-full object-cover" src="../../assets/testimage.svg">
      <img class="absolute bottom-4 right-1 px-3 z-20" src="../../assets/youtube.svg">
    </div>
    <div class="pb-5 px-2 pt-2.5">
      <p class="text-[20px] font-bold">
        Kuzey Işıkları
      </p>
      <p class=" text-xs text-gray-400">
        Avaible on <span class="text-white">Youtube</span>
      </p>
    </div>
  </div>
</template>
