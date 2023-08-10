<script setup lang="ts">
import type { Form } from '@nuxthq/ui/dist/runtime/types'
import { registerSchema } from './schema'
import type { RegisterSchema } from './schema'
import useAuth from '@/composables/auth'

const { signUp } = useAuth()

const form = ref<Form<RegisterSchema>>()
const values = ref<Partial<RegisterSchema>>({
  email: undefined,
  password: undefined,
  passwordConfirm: undefined,
})

async function onSubmit() {
  await form.value!.validate()
  signUp(values.value as RegisterSchema)
}
</script>

<template>
  <UForm ref="form" :schema="registerSchema" :state="values" class="relative w-full h-full flex items-center justify-center bg-black text-white z-0" @submit.prevent="onSubmit">
    <NuxtLink to="/" class="mx-auto absolute top-20">
      <img src="~assets/logo.svg">
    </NuxtLink>
    <div class="w-1/4 flex flex-col gap-4">
      <div class="flex gap-2 items-end">
        <h1 class="text-3xl font-bold capitalize">
          Register
        </h1>
        <span class="text-sm text-gray-400">or</span>
        <NuxtLink to="login" class="text-[#BFA8FC] underline font-semibold capitalize">
          Login
        </NuxtLink>
      </div>

      <p class="text-sm text-gray-400">
        How do I get started blazein dolor at?
      </p>

      <UButton icon="i-devicon-google" variant="secondary" label="Sign in with Google" block />

      <p class="text-sm text-gray-400">
        or
      </p>

      <UFormGroup name="email">
        <UInput v-model="values.email" icon="i-ph-user-fill" placeholder="Username or Email" />
      </UFormGroup>
      <UFormGroup name="password">
        <UInputPassword v-model="values.password" placeholder="Password" />
      </UFormGroup>
      <UFormGroup name="passwordConfirm">
        <UInputPassword placeholder="Confirm Password" />
      </UFormGroup>

      <div class="flex items-center justify-between text-sm">
        <UCheckbox label="Remember me" />
        <NuxtLink to="/auth/forgot" class="text-[#BFA8FC]">
          Forgot Password?
        </NuxtLink>
      </div>

      <UButton label="Sign Up" block type="submit" />
    </div>
  </UForm>
</template>
