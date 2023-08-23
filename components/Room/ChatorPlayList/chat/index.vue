<script setup lang="ts">
const timeAgo = useTimeAgo(new Date(2021, 0, 1))

</script>

<template>
  <div class="flex flex-col justify-between h-[680px] ">
    <div class="relative flex flex-col gap-10">
      <div
        :data-current-time="timeAgo" class=" relative flex text-sm items-center after:absolute after:right-5 after:bottom-[-20px] after:text-gray-500 after:text-xs after:content-[attr(data-current-time)]
  w-fit gap-2 px-5 py-[15px] rounded-3xl bg-gray-700/80"
      >
        Lorem ipsum dolor sit amet.
      </div>
      <div class="flex justify-end">
        <div
          :data-current-time="timeAgo"
          class=" relative flex text-sm items-center before:absolute before:left-5 before:bottom-[-20px] before:text-gray-500 before:text-xs before:content-[attr(data-current-time)] w-fit gap-2 px-5 py-[15px] rounded-3xl bg-purple-400/20"
        >
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
    <div>
      <UInput variant="solid" placeholder="Write Something..." class="!px-12">
        <template #leading>
          <UButton class="!text-gray-600" variant="ghost" icon="i-ph-smiley" />
        </template>
        <template #trailing>
          <UButton class="!text-gray-600" variant="ghost" icon="i-ph-paper-plane-tilt-fill" />
        </template>
      </UInput>
    </div>
  </div>
</template>

<style scoped>

</style>
