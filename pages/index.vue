<script setup lang="ts">
const preference = ['system', 'light', 'dark', 'sepia']
</script>

<template>
  <div class="p-5 flex gap-4">
    <UButton label="Button" />
    <UButton label="Button" loading />
    <UButton label="Button" variant="soft" />
    <UInput variant="default" />
    <UInput variant="outline" icon="i-heroicons-magnifying-glass-20-solid" />
    <ClientOnly>
      <USelectMenu v-model="$colorMode.value" :options="preference" />
    </ClientOnly>
  </div>
  <div>
    <UTextarea variant="default" />
  </div>
</template>

<style scoped>

</style>
