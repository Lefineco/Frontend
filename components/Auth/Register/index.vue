<script setup lang="ts">
import type { Form } from '@nuxthq/ui/dist/runtime/types'
import type { Schema } from './schema'

const form = ref<Form<Schema>>()
const values = ref<Partial<Schema>>({
  email: undefined,
  password: undefined,
  passwordConfirm: undefined,
})
</script>

<template>
  <UForm ref="form" :state="values" class="relative w-full h-full flex items-center justify-center bg-black text-white z-0">
    <NuxtLink to="/" class="mx-auto absolute top-20">
      <img src="~assets/logo.svg">
    </NuxtLink>
    <div class="w-1/4 flex flex-col gap-4">
      <div class="flex gap-2 items-end">
        <h1 class="text-3xl font-bold capitalize">
          Register
        </h1>
        <span class="text-sm text-gray-400">or</span>
        <NuxtLink to="register" class="text-[#BFA8FC] underline font-semibold capitalize">
          Login
        </NuxtLink>
      </div>

      <p class="text-sm text-gray-400">
        How do I get started blazein dolor at?
      </p>

      <UButton icon="i-devicon-google" size="xl" variant="solid" label="Sign in with Google" block class="text-sm font-light !bg-[#FFFFFF33] hover:!bg-[#FFFFFF50] transition" />

      <p class="text-sm text-gray-400">
        or
      </p>

      <UFormGroup name="email">
        <UInput v-model="values.email" icon="i-ph-user-fill" size="xl" variant="none" placeholder="Username or Email" class="!bg-[#ffffff1a] !text-xs py-4" />
      </UFormGroup>
      <UFormGroup name="password">
        <UInputPassword v-model="values.password" size="xl" variant="none" placeholder="Password" class="!bg-[#ffffff1a] !text-xs py-4" />
      </UFormGroup>
      <UFormGroup name="passwordConfirm">
        <UInputPassword size="xl" variant="none" placeholder="Confirm Password" class="!bg-[#ffffff1a] !text-xs py-4" />
      </UFormGroup>

      <div class="flex items-center justify-between text-sm">
        <UCheckbox label="Remember me" />
        <NuxtLink to="/auth/forgot" class="text-[#BFA8FC]">
          Forgot Password?
        </NuxtLink>
      </div>

      <UButton size="xl" variant="solid" label="Sign In" block class="font-light" />
    </div>
  </UForm>
</template>
