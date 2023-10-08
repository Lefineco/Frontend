<script setup lang="ts">
import type { TableRows } from '~/server/types'

interface Props {
  data: TableRows<'users'>
}

defineProps<Props>()
</script>

<template>
  <div class="relative h-36 w-full flex flex-col items-center justify-center rounded-[20px]">
    <div
      class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60"
    >
      <!-- TODO: thumbnail utils and supabase col -->
      <img
        class="h-full w-full object-cover rounded-[20px]"
        src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      >
    </div>
    <div
      class="absolute max-lg:items-center w-full flex-col flex lg:flex-row justify-between bottom-1 py-2 px-5"
    >
      <div class="flex flex-col lg:flex-row items-center justify-center gap-3">
        <UAvatar :src="data.avatar_url || ''" size="md" :alt="data?.name || ''" />
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm font-medium capitalize">{{ data.name }}</span>
          <span class="text-xs text-zinc-400">Recommended</span>
        </div>
      </div>
      <UButton class="m-3 backdrop-blur-sm" variant="soft" size="sm">
        Follow
      </UButton>
    </div>
  </div>
</template>
