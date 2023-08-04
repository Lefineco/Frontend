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
    <img class=" custom-gradient h-full w-full object-cover rounded-[20px]" src="../../assets/testimage.svg">
    <div class="absolute w-full flex justify-between bottom-1 py-2 px-5">
      <div class="flex items-center justify-center gap-3">
        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xl" />
        <div class="flex flex-col">
          <span class="text-lg">{{ name }}</span>
          <span class="text-xs text-gray-500">Recommended</span>
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
