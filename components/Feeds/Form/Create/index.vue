<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div
    class="w-full flex flex-col rounded-3xl bg-white/5"
  >
    <div class="p-4">
      <UTextarea v-model="value" variant="none" placeholder="Write something or ask..." />
    </div>

    <hr class="border-white/5">

    <div class="flex items-center justify-between p-4">
      <div>
        <UButton variant="ghost" color="white" icon="i-ph-image-square-fill" label="Add Photo" />
        <UButton variant="ghost" color="white" icon="i-ph-calendar" label="Create Activity" />
      </div>
      <UButton>Create Feed</UButton>
    </div>
  </div>
</template>
