<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/logo.svg'

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const items = [
  [
    {
      label: user.value && (user.value.name || user.value.email),
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
      onclick: () => supabase.auth.signOut(),
    },
  ],
]

const isClicked = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

function handleClick() {
  isClicked.value = !isClicked.value

  if (isClicked.value && inputRef.value)
    inputRef.value.focus()
}
const q = ref('')
function handleInputBlur() {
  isClicked.value = false
}
</script>

<template>
  <div class="bg-black/80 backdrop-blur-md border-b border-white/5 shadow-sm fixed inset-x-0 top-0 z-10 flex justify-between items-center md:px-6 py-3">
    <div v-if="isClicked" class="w-full">
      <!-- TODO: component haline getirilmeli -->
      <UInput
        ref="inputRef"
        v-model="q"
        name="q"
        autofocus
        size="sm"
        placeholder="Search Video, Lefiner or Room"
        icon="i-heroicons-magnifying-glass-20-solid"
        :ui="{ icon: { trailing: { pointer: '' } } }"
        @blur="handleInputBlur"
      >
        <template #trailing>
          <UButton
            color="gray"
            variant="link"
            icon="i-heroicons-x-mark-20-solid"
            :padded="false"
            @click="q = ''"
          />
        </template>
      </UInput>
    </div>

    <template v-else>
      <div class="flex items-center gap-3">
        <img :src="logo" class="h-9">
      </div>
      <div class="w-9/12 lg:w-[500px] max-md:hidden max-lg:px-8">
        <UInput
          v-model="q"
          name="q"
          autofocus
          size="sm"
          placeholder="Search Video, Lefiner or Room"
          :ui="{ icon: { trailing: { pointer: '' } } }"
          icon="i-heroicons-magnifying-glass-20-solid"
          @blur="handleInputBlur"
        >
          <template #trailing>
            <UButton
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="q = ''"
            />
          </template>
        </UInput>
      </div>
      <div
        class="space-x-2 flex items-center justify-center"
        :class="{ hidden: isClicked }"
      >
        <UIcon
          class="md:hidden w-6 h-6"
          :class="{ hidden: isClicked }"
          name="i-heroicons-magnifying-glass-20-solid"
          @click="handleClick"
        />
        <div v-if="user" class="flex gap-2">
          <UDropdown
            :items="items"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-end' }"
          >
            <UAvatar variant="ghost" :src="user.user_metadata.picture" :alt="user.picture" />

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
  </div>
</template>
