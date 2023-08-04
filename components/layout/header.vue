<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="dark:bg-black !bg-opacity-50 flex justify-between items-center px-6 py-3">
    <div class="flex items-center gap-3">
      <img :src="logo" class="h-9">
    </div>
    <div class="w-[500px]">
      <UInput placeholder="Search Video, Lefiner or Room" icon="i-heroicons-magnifying-glass-20-solid" color="primary" variant="default" />
    </div>
    <div class="space-x-4">
      <UButton label="Button">
        Login
      </UButton>
      <UButton label="Button" variant="soft">
        Register
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
