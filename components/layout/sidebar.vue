<script setup lang="ts">
import type { VerticalNavigationLink } from '@nuxthq/ui/dist/runtime/types'

const links: VerticalNavigationLink[] = [{
  label: '',
  custom: true,
  icon: 'i-ph-play-circle-fill',
  activeClass: '!text-red-500',
  to: '/',
}, {
  label: '',
  icon: 'i-ph-users-three-light',
  to: '/community',
}, {
  label: '',
  icon: 'i-heroicons-command-line',
  to: '/',
}]
</script>

<template>
  <div class="dark:bg-black !bg-opacity-50 flex h-full items-center flex-col">
    <span class="sr-only h-12 w-12" />
    <UVerticalNavigation
      :ui="{
        wrapper: 'relative space-y-3',
        padding: 'p-3',
        icon: {
          base: 'flex-shrink-0 w-6 h-6',
          active: 'text-gray-700 dark:text-gray-200',
          inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
        },
      }" :links="links"
    />
  </div>
</template>

<style scoped>

</style>
