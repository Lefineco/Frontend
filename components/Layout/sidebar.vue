<script setup lang="ts">
import type { VerticalNavigationLink } from '#ui/types'

const links: VerticalNavigationLink[] = [
  {
    label: '',
    custom: true,
    icon: 'i-ph-play-circle-fill',
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
  <div
    class="fixed z-20 top-0 border-r border-white/5 h-full pt-20 px-0 hidden md:flex items-start flex-col"
  >
    <UVerticalNavigation
      :ui="{
        wrapper: 'relative space-y-3',
        base: 'pl-6 before:!bg-transparent',
        active: 'before:border-l-2 before:rounded-none before:!border-l-white',
        icon: {
          base: 'flex-shrink-0 w-6 h-6 m-1',
          inactive:
            '!text-white/50 group-hover:!text-white/50 dark:group-hover:text-gray-200',
        },
      }"
      :links="links"
    />
  </div>
</template>
