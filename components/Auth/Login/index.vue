<script setup lang="ts">
import type { Form } from '@nuxthq/ui/dist/runtime/types'
import { loginSchema } from './schema'
import type { LoginSchema } from './schema'
import useAuth from '@/composables/auth'
import useAsync from '@/composables/async'

const { signIn } = useAuth()
const { loading, makeAsyncOperation } = useAsync()

const form = ref<Form<LoginSchema>>()
const values = ref<Partial<LoginSchema>>({
  email: undefined,
  password: undefined,
})

function onSubmit() {
  makeAsyncOperation(async () => {
    await form.value!.validate()
    await signIn(values.value as LoginSchema)
  })
}
</script>

<template>
  <UForm ref="form" :schema="loginSchema" :state="values" class="relative w-full h-full flex flex-col items-center justify-center bg-black text-white z-0" @submit.prevent="onSubmit">
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

      <UFormGroup name="email" size="xs">
        <UInput v-model="values.email" icon="i-ph-user-fill" placeholder="Username or Email" />
      </UFormGroup>
      <UFormGroup name="password" size="xs">
        <UInputPassword v-model="values.password" placeholder="Password" />
      </UFormGroup>

      <div class="flex items-center justify-between text-sm">
        <UCheckbox label="Remember me" />
        <NuxtLink to="/auth/forgot" class="text-primary-500">
          Forgot Password?
        </NuxtLink>
      </div>

      <UButton label="Sign In" block type="submit" :loading="loading" />
    </div>
  </UForm>
</template>
