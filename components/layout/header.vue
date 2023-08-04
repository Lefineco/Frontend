<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class=" dark:bg-black !bg-opacity-50 flex  justify-between items-center px-10 py-6">
    <div class="flex items-center gap-3">
      <img :src="logo" class="h-10">
    </div>
    <div class="w-[500px]">
      <UInput size="md" color="gray"  placeholder="Search Video, Lefiner or Room" icon="i-heroicons-magnifying-glass-20-solid"  variant="solid" />
    </div>
    <div>
      <UButton class="m-3" label="Button">
        Login
      </UButton>
      <UButton class="m-3" label="Button" variant="soft">
        Register
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
