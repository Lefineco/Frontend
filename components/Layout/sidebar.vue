<script setup lang="ts">
import { navigationLinks } from '~/composables/helper'
import { TERTIARY } from '~/constants/colors'
import { key } from '~/composables/helper/random'

const links = [
  {
    label: 'Feed',
    icon: ['i-ph-play-circle', 'i-ph-play-circle-fill'],
    to: '/',
  },
  {
    label: 'Community',
    icon: ['i-ph-users-three', 'i-ph-users-three-fill'],
    to: '/community',
  },
  {
    label: 'Messages',
    icon: ['i-ph-chat-teardrop-dots', 'i-ph-chat-teardrop-dots-fill'],
    to: '/messages',
  },
]

const yourList = [
  {
    label: 'List 1',
    to: '/list/1',
  },
  {
    label: 'List 2',
    to: '/list/2',
  },
  {
    label: 'List 3',
    to: '/list/3',
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
    <div class="w-full space-y-4">
      <label
        class="tracking-widest p-4 w-full whitespace-nowrap text-[10px] font-medium uppercase text-white/40"
      >
        Your List
      </label>
      <UVerticalNavigation
        :ui="{
          wrapper: 'px-4 w-full relative space-y-3',
          base: 'pl-4 text-sm font-medium',
          active: 'before:!bg-white/5',
        }"
        :links="yourList"
      >
        <template #icon="{ link }">
          <UIcon
            name="i-ph-circle-fill"
            class="text-[8px]"
            :style="{ background: TERTIARY[key(link.label)] }"
          />
        </template>
      </UVerticalNavigation>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.sidebar {
  @apply fixed z-20 top-0 space-y-6 h-full w-full max-w-[16rem] pt-24 px-0 hidden md:flex items-start flex-col;
}
</style>
