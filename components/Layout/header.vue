<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/logo.svg'

const user: any = ref(null)

const { data } = await useFetch('/api/me', {
  headers: useRequestHeaders(['cookie']),
})

user.value = data.value

const supabase = useSupabaseClient()
const router = useRouter()

async function signOut() {
  await supabase.auth.signOut()
  reloadNuxtApp({ force: true })
}

const items = [
  [
    {
      label: user.value ? (user.value.email) : '',
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
      icon: 'i-heroicons-megaphone',
    },
    {
      label: 'Status',
      icon: 'i-heroicons-signal',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-ph-sign-out',
      onclick: signOut,
    },
  ],
]

const isClicked = ref(false)
const search = ref('')
</script>

<template>
  <div
    class="bg-gradient-to-b from-black sm:from-black/5 sm:backdrop-blur-xl sm:border-b sm:border-white/5 sm:shadow-xl fixed top-0.5 inset-x-0 z-10 flex justify-between items-center py-5 px-4 sm:px-0 sm:py-3 space-x-5"
  >
    <div class="absolute inset-x-0 h-0.5 -top-0.5 bg-violet-950" />
    <div v-if="isClicked" class="w-full">
      <UInputSearch
        v-model="search"
        name="search"
        placeholder="Search Video, Lefiner or Room"
        autofocus
        @blur="() => (isClicked = false)"
      />
    </div>
    <template v-else>
      <button
        class="flex flex-shrink-0 items-center gap-3"
        @click="router.push('/')"
      >
        <img :src="logo" class="h-9">
      </button>
      <div class="w-full lg:w-[500px] hidden lg:block">
        <UInputSearch
          v-model="search"
          class="w-full"
          name="search"
          placeholder="Search Video, Lefiner or Room"
        />
      </div>
      <div
        class="space-x-6 flex items-center justify-center"
        :class="{ hidden: isClicked }"
      >
        <UIcon
          class="lg:hidden w-6 h-6 cursor-pointer"
          :class="{ hidden: isClicked }"
          name="i-heroicons-magnifying-glass-20-solid"
          @click="isClicked = true"
        />
        <div v-if="user" class="flex gap-2">
          <UDropdown
            :items="items"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-end' }"
          >
            <UAvatar
              variant="ghost"
              :src="user.user_metadata.picture"
              :alt="user.picture"
            />

            <template #account="{ item }">
              <div class="text-left">
                <p class="text-xs">
                  Signed in as
                </p>
                <p
                  class="truncate w-36 font-medium text-gray-900 dark:text-white"
                >
                  {{ item.label }}
                </p>
              </div>
            </template>
          </UDropdown>
        </div>
        <div v-else class="space-x-4 pr-6">
          <UButton to="/auth/login" label="Button">
            Login
          </UButton>
          <UButton to="/auth/register" label="Button" variant="secondary">
            Register
          </UButton>
        </div>
      </div>
    </template>
  </div>
</template>
