<script setup lang="ts">

</script>

<template>
  <div class="w-full ">
    <div class="relative w-full max-sm:h-full h-60 flex flex-col items-start justify-start  rounded-[20px] ">
      <div class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60 ">
        <img class="h-full w-full object-cover rounded-[20px]" src="../../assets/testimage.svg">
        <div class="flex gap-2 absolute z-50 bottom-4 right-5 lg:hidden">
          <UButton variant="gray" color="white">
            Cancel
          </UButton>
          <UButton>Save All</UButton>
        </div>
      </div>
    </div>

    <div class="-mt-6 w-full  flex justify-between items-center px-12">
      <div class="flex  items-center justify-center gap-4">
        <div class="bg-black rounded-full flex items-center justify-center p-1 z-10">
          <UAvatar :ui="{ size: { custom: 'max-lg:w-20 max-lg:h-20 lg:w-24 h-24' } }" src="https://avatars.githubusercontent.com/u/739984?v=4" size="custom" />
        </div>
        <div class="flex flex-col gap-2 mt-5">
          <span class="text-lg">Berke</span>
          <span class="text-xs text-gray-500 font-bold">@Zort</span>
        </div>
      </div>
      <div class="flex gap-2 max-lg:hidden">
        <UButton variant="gray" color="white">
          Cancel
        </UButton>
        <UButton>Save All</UButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
