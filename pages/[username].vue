<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="page">
    <ProfileSection />
    <ProfileSettings />
  </div>
</template>

<style lang="postcss" scoped>
.page {
  @apply flex flex-col w-full h-full p-4 md:!pt-20;
}
</style>
