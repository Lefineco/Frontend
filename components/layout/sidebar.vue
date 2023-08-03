<script setup lang="ts">
import type { VerticalNavigationLink } from '@nuxthq/ui/dist/runtime/types'

const links: VerticalNavigationLink[] = [{
  label: '',
  icon: 'i-heroicons-home',
  activeClass: '',
  to: '/',
}, {
  label: '',
  icon: 'i-heroicons-chart-bar',
  to: '/',
}, {
  label: '',
  icon: 'i-heroicons-command-line',
  to: '/',
}]
</script>

<template>
  <div class="dark:bg-black !bg-opacity-50 flex h-full items-center flex-col">
    <!-- <UButton size="xl" color="white" icon="i-ph-play-circle-fill" variant="link" />
    <UButton size="xl" color="white" icon="i-ph-users-three-light" variant="link" />
    <UButton size="xl" color="white" icon="i-ph-chat-teardrop-dots" variant="link" /> -->
    <UVerticalNavigation :links="links" />
  </div>
</template>

<style scoped>

</style>
