<script setup lang="ts">
interface Props {
  uuid: string
  message: string
}
defineProps<Props>()
const meUid = 'berke'

const timeAgo = useTimeAgo(new Date(2021, 0, 1))
</script>

<template>
  <div
    v-if="meUid !== uuid"
    :data-current-time="timeAgo" class=" relative flex text-sm items-center after:relative after:right-0 after:bottom-[-14px] after:text-gray-500 after:text-xs after:content-[attr(data-current-time)]
  w-fit gap-2 px-5 py-[15px] rounded-3xl bg-gray-700/80"
  >
    {{ message }}
  </div>
  <div class="flex justify-end">
    <div
      v-if="meUid === uuid"
      :data-current-time="timeAgo"
      class=" relative flex text-sm items-center after:relative after:right-0 after:bottom-[-14px] after:text-gray-500 after:text-xs after:content-[attr(data-current-time)] w-fit gap-2 px-5 py-[15px] rounded-3xl bg-violet-400/20"
    >
      {{ message }}
    </div>
  </div>
</template>

<style scoped>

</style>
