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
  <div class="w-[300px]  bg-black  flex flex-col bg-clip-content  rounded-[20px] justify-start">
    <div class="relative w-full ">
      <div class="custom-gradient rounded-[20px]">
        <img class="w-full h-full   object-cover  " src="../../assets/testimage.svg">
      </div>
      <img class="absolute bottom-4 right-1 px-3" src="../../assets/youtube.svg">
    </div>
    <div class="pb-5 px-3 pt-2">
      <p class="text-[20px] font-bold">
        Kuzey Işıkları
      </p>
      <p class=" text-xs text-gray-400">
        Avaible on <span class="text-white">Youtube</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
 .custom-gradient {
  background: black;
  opacity: 0.4;

 }

</style>
