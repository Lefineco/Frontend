<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  middleware: 'auth',
})
</script>

<template>
  <AuthLogin />
</template>
