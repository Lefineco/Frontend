<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="bg-black/5 border-b border-white/5 shadow-sm backdrop-blur-md fixed inset-x-0 top-0 z-10 flex justify-between items-center px-6 py-3">
    <div class="flex items-center gap-3">
      <img :src="logo" class="h-9">
    </div>
    <div class="w-[500px]">
      <UInput size="sm" placeholder="Search Video, Lefiner or Room" icon="i-heroicons-magnifying-glass-20-solid" />
    </div>
    <div class="lg:hidden">
     <UButton icon="i-ph-text-align-justify" variant="ghost"></UButton>
    </div>
    <div class=" max-lg:hidden space-x-4">
      <UButton to="/auth/login" label="Button">
        Login
      </UButton>
      <UButton to="/auth/register" label="Button" variant="secondary">
        Register
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
