<script setup lang="ts">
const preference = ['system', 'light', 'dark', 'sepia']
</script>

<template>
  <div class="p-5 flex gap-4">
    <UButton label="Button" />
    <UButton label="Button" loading />
    <UButton label="Button" variant="soft" />
    <UInput color="white" />
    <UInput variant="outline" color="white" icon="i-heroicons-magnifying-glass-20-solid" />
    <ClientOnly>
      <USelectMenu v-model="$colorMode.value" :options="preference" />
    </ClientOnly>
  </div>
  <div>
    <UTextarea variant="default" />
  </div>
  <div>
    <h2>Toggles</h2>
    <div class="flex gap-2">
      <UToggle :model-value="true" />
      <UToggle :model-value="true" on-icon="i-heroicons-moon-20-solid" />
      <UToggle :model-value="true" disabled />

      <UToggle />
      <UToggle off-icon="i-heroicons-sun-20-solid" />
      <UToggle disabled />
    </div>
  </div>
</template>

<style scoped></style>
