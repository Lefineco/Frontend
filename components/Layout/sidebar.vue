<script setup lang="ts">
// eslint-disable-next-line antfu/no-import-node-modules-by-path
import type { VerticalNavigationLink } from '../../node_modules/@nuxthq/ui/dist/runtime/types'

const links: VerticalNavigationLink[] = [
  {
    label: '',
    custom: true,
    icon: 'i-ph-play-circle-fill',
    activeClass: '!text-red-500',
    to: '/',
  },
  {
    label: '',
    icon: 'i-ph-users-three-light',
    to: '/community',
  },
  {
    label: '',
    icon: 'i-ph-chat-teardrop-dots',
    to: '/messages',
  },
]
</script>

<template>
  <div class="sticky top-16 hidden md:flex items-start flex-col !p-0 !py-4 !w-auto">
    <span class="sr-only h-12 w-12" />
    <UVerticalNavigation
      :ui="{
        wrapper: 'relative space-y-3',
        base: 'pl-4 before:!bg-transparent',
        active: 'before:border-l-2 before:rounded-none before:!border-l-primary',
        icon: {
          base: 'flex-shrink-0 w-6 h-6 m-1',
          active: 'text-gray-700 dark:text-gray-200',
          inactive:
            'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
        },
      }"
      :links="links"
    />
  </div>
</template>
