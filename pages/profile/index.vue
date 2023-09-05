<script setup lang="ts">
definePageMeta({
  // middleware: 'auth',
})
</script>

<template>
  <div class="page flex flex-col w-full h-full p-4 md:!pt-20">
    <ProfileSection />
    <ProfileSettings />
  </div>
</template>

<style scoped></style>
