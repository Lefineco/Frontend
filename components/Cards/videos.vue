<script setup lang="ts">
interface Props {
  name: string
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
  <div class=" max-lg:w-full  w-72 flex flex-col relative justify-start ">
    <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80">
      <img class="absolute bottom-4 right-1 px-3 z-20" src="../../assets/youtube.svg">
    </div>
    <div class="pb-5 px-2 pt-2.5">
      <p class="text-[20px] font-bold">
        {{ name }}
      </p>
      <p class=" text-xs text-gray-400">
        Avaible on <span class="text-white">Youtube</span>
      </p>
    </div>
  </div>
</template>
