<script setup lang="ts">
import type { Form } from 'node_modules/@nuxthq/ui/dist/runtime/types'
import type { Schema } from './schema'

const form = ref<Form<Schema>>()
const values = ref<Partial<Schema>>({
  email: undefined,
  password: undefined,
})
</script>

<template>
  <UForm ref="form" :state="values" class="relative w-full h-full flex flex-col items-center justify-center text-white z-0">
    <NuxtLink to="/" class="mx-auto pb-24">
      <img src="~assets/logo.svg" class="h-8">
    </NuxtLink>
    <div class="w-1/4 flex flex-col gap-4">
      <div class="flex gap-2 items-end">
        <h1 class="text-3xl font-bold capitalize">
          Login
        </h1>
        <span class="text-sm text-gray-400">or</span>
        <NuxtLink to="register" class="text-[#BFA8FC] underline font-semibold capitalize">
          Register
        </NuxtLink>
      </div>

      <p class="text-sm text-gray-400">
        How do I get started blazein dolor at?
      </p>

      <UButton icon="i-devicon-google" label="Sign in with Google" variant="secondary" block />

      <p class="text-sm text-gray-400">
        or
      </p>

      <UFormGroup name="email">
        <UInput v-model="values.email" icon="i-ph-user-fill" placeholder="Username or Email" />
      </UFormGroup>
      <UFormGroup name="password">
        <UInputPassword v-model="values.password" placeholder="Password" />
      </UFormGroup>

      <div class="flex items-center justify-between text-sm">
        <UCheckbox label="Remember me" />
        <NuxtLink to="/auth/forgot" class="text-primary-500">
          Forgot Password?
        </NuxtLink>
      </div>

      <UButton variant="solid" label="Sign In" block />
    </div>
  </UForm>
</template>
