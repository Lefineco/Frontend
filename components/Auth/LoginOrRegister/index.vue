<script setup lang="ts">
import type Props from './interface'

const props = withDefaults(defineProps<Props>(), {
  action: 'login',
})

const destination = props.action === 'login' ? 'register' : 'login'
</script>

<template>
  <div class="relative w-full h-full flex items-center justify-center bg-black text-white z-0">
    <img src="~assets/auth-background.png" class="absolute top-0 right-0 left-0 w-full -z-10">
    <NuxtLink to="/" class="mx-auto absolute top-20">
      <img src="~assets/logo.svg">
    </NuxtLink>
    <div class="w-1/4 flex flex-col gap-4">
      <div class="flex gap-2 items-end">
        <h1 class="text-3xl font-bold capitalize">
          {{ action }}
        </h1>
        <span class="text-sm text-gray-400">or</span>
        <NuxtLink :to="destination" class="text-[#BFA8FC] underline font-semibold capitalize">
          {{ destination }}
        </NuxtLink>
      </div>

      <p class="text-sm text-gray-400">
        How do I get started blazein dolor at?
      </p>

      <UButton icon="i-devicon-google" size="xl" variant="solid" label="Sign in with Google" block class="text-sm font-light bg-[#FFFFFF33]" />

      <p class="text-sm text-gray-400">
        or
      </p>

      <UInput icon="i-ph-user-fill" size="xl" variant="none" placeholder="Username or Email" class="bg-[#ffffff1a] !text-xs py-4" />
      <UInput icon="i-ph-lock" size="xl" variant="none" placeholder="Password" class="bg-[#ffffff1a] !text-xs py-4" />
      <UInput v-if="action === 'register'" icon="i-ph-lock" size="xl" variant="none" placeholder="Confirm Password" class="bg-[#ffffff1a] !text-xs py-4" />

      <div class="flex items-center justify-between text-sm">
        <UCheckbox label="Remember me" />
        <NuxtLink to="/auth/forgot" class="text-[#BFA8FC]">
          Forgot Password?
        </NuxtLink>
      </div>

      <UButton size="xl" variant="solid" label="Sign In" block class="font-light" />
      <UButton size="xl" variant="solid" color="black" label="Sign Up" block class="font-light" />
    </div>
  </div>
</template>
