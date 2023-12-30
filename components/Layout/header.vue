<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownItem } from '#ui/types'

const user = useSupabaseUser()

const supabase = useSupabaseClient()

function signOut() {
  supabase.auth.signOut()
  reloadNuxtApp({ force: true })
}

const items: DropdownItem[][] = [
  [
    {
      label: user.value?.email ? user.value.email : '',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Settings',
      to: '/profile',
      icon: 'i-ph-gear-six',
    },
  ],
  [
    {
      label: 'Changelog',
      icon: 'i-ph-megaphone-simple',
      href: 'https://github.com/Lefineco/Frontend/releases',
    },
    {
      label: 'Status',
      icon: 'i-ph-cell-signal-full',
      href: 'https://lefine.statuspage.io/',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-ph-sign-out',
      click: signOut,
    },
  ],
]

const isClicked = ref(false)
const crateRoomModal = ref(false)
const search = ref('')
</script>

<template>
  <div class="header">
    <div class="progress" />
    <SharedLogo to="/" />
    <div class="w-full lg:w-[500px] hidden lg:block">
      <UInputSearch
        v-model="search"
        class="w-full"
        name="search"
        placeholder="Search Video, Lefiner or Room"
      />
    </div>
    <div
      class="space-x-6 flex items-center justify-center pr-6"
      :class="{ hidden: isClicked }"
    >
      <UIcon
        class="hidden sm:block lg:hidden w-6 h-6 cursor-pointer"
        :class="{ hidden: isClicked }"
        name="i-heroicons-magnifying-glass-20-solid"
        @click="isClicked = true"
      />
      <ClientOnly>
        <div v-if="user" class="flex gap-4 items-center">
          <UButton
            icon="i-ph-plus"
            color="white"
            variant="soft"
            @click="crateRoomModal = !crateRoomModal"
          >
            Create Room
          </UButton>
          <CreateRoom v-model="crateRoomModal" />
          <UDropdown
            :items="items"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-end' }"
          >
            <UAvatar
              variant="ghost"
              :src="user.user_metadata.picture"
              :alt="user.aud"
            />

            <template #account="{ item }">
              <div class="text-left">
                <p class="text-xs opacity-80">
                  Signed in as
                </p>
                <span class="text-sm font-medium">
                  {{ item.label }}
                </span>
              </div>
            </template>
          </UDropdown>
        </div>
        <div v-else class="space-x-4 flex">
          <UButton to="/auth/login" label="Button" color="white">
            Login
          </UButton>
          <UButton to="/auth/register" label="Button" variant="soft" color="white">
            Register
          </UButton>
        </div>
        <template #fallback>
          <USkeleton class="h-8 w-8" :ui="{ rounded: 'rounded-full' }" />
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.header {
  @apply border-b border-white/5 w-full flex justify-between items-center py-5 px-4 sm:px-0 sm:py-3 space-x-5;

  .progress {
    @apply absolute inset-x-0 h-0.5 -top-0.5 bg-violet-950;
  }
}
</style>
