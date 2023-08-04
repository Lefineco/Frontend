<script setup lang="ts">
const preference = ['system', 'light', 'dark', 'sepia']

const toggleTest = ref(false)
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
    <UTextarea variant="outline" />
  </div>
  <div>
    <h2>Toggles</h2>
    <div class="flex gap-2">
      <UToggle v-model="toggleTest" />
      <UToggle v-model="toggleTest" on-icon="i-heroicons-moon-20-solid" off-icon="i-heroicons-sun-20-solid" />
      <UToggle v-model="toggleTest" disabled />
    </div>
  </div>
</template>

<style scoped></style>
