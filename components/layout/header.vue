<script setup lang="ts">
import logo from '@/assets/logo.svg'

const user = useSupabaseUser()

const items = [
  [{
    label: user.value && (user.value.name || user.value.email),
    slot: 'account',
    disabled: true,
  }], [{
    label: 'Settings',
    to: '/profile',
    icon: 'i-ph-gear-six',
  }], [
    {
      label: 'Changelog',
      icon: 'i-heroicons-megaphone',
    }, {
      label: 'Status',
      icon: 'i-heroicons-signal',
    }], [{
    label: 'Sign out',
    icon: 'i-ph-sign-out',
  }],
]
</script>

<template>
  <div class="bg-black/5 border-b border-white/5 shadow-sm backdrop-blur-md fixed inset-x-0 top-0 z-10 flex justify-between items-center px-6 py-3 h-16">
    <div class="flex items-center gap-3">
      <img :src="logo" class="h-9">
    </div>
    <div class="w-[500px]">
      <UInput size="sm" placeholder="Search Video, Lefiner or Room" icon="i-heroicons-magnifying-glass-20-solid" />
    </div>
    <div v-if="user" class="flex gap-2">
      <!-- ... -->
      <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-end' }">
        <UAvatar variant="ghost" :src="user.picture" :alt="user.email" />

        <template #account="{ item }">
          <div class="text-left">
            <p class="text-xs">
              Signed in as
            </p>
            <p class="truncate w-36 font-medium text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
          </div>
        </template>
      </UDropdown>
    </div>
    <div v-else class="space-x-4">
      <UButton to="/auth/login" label="Button">
        Login
      </UButton>
      <UButton to="/auth/register" label="Button" variant="secondary">
        Register
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
