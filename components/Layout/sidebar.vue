<script setup lang="ts">
import { navigationLinks } from '~/composables/helper'

const links = [
  {
    label: '',
    icon: ['i-ph-play-circle', 'i-ph-play-circle-fill'],
    to: '/',
  },
  {
    label: '',
    icon: ['i-ph-users-three', 'i-ph-users-three-fill'],
    to: '/community',
  },
  {
    label: '',
    icon: ['i-ph-chat-teardrop-dots', 'i-ph-chat-teardrop-dots-fill'],
    to: '/messages',
  },
]
</script>

<template>
  <div class="sidebar">
    <UVerticalNavigation
      :ui="{
        wrapper: 'relative space-y-3 w-full',
        base: 'pl-4 before:w-5 before:!bg-transparent text-xs font-medium',
        active:
          'font-semibold before:bg-gradient-to-r before:from-primary/20 before:border-l-2 before:h-10 before:top-1/2 before:-translate-y-1/2 before:rounded-none before:!border-l-primary',
        icon: {
          base: 'flex-shrink-0 w-5 h-5 m-1',
          inactive:
            'text-white/50 group-hover:!text-white/50 dark:group-hover:text-gray-200',
        },
      }"
      :links="navigationLinks(links)"
    />
  </div>
</template>

<style lang="postcss" scoped>
.sidebar {
  @apply border-r border-white/5 space-y-6 h-full w-full max-w-[4rem] pt-5 px-0 hidden md:flex items-start flex-col;
}
</style>
