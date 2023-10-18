<script setup lang="ts">
import type { Form } from '#ui/types'
import useAuth from '@/composables/service/auth'
import useAsync from '@/composables/helper/async'
import { registerSchema } from '~/composables/schemas/auth'
import type { RegisterSchema } from '~/composables/schemas/auth'

definePageMeta({
  layout: 'blank',
  // middleware: 'auth',
})

const { signUp } = useAuth()
const { loading, makeAsyncOperation } = useAsync()

const form = ref<Form<RegisterSchema>>()
const values = ref<Partial<RegisterSchema>>({
  email: undefined,
  password: undefined,
  passwordConfirm: undefined,
})

async function onSubmit() {
  await form.value!.validate()
  makeAsyncOperation(async () => {
    await signUp(values.value as RegisterSchema)
  })
}
</script>

<template>
  <UForm
    ref="form"
    :schema="registerSchema"
    :state="values"
    :validate-on="['submit']"
    class="relative w-full h-full flex items-center justify-center text-white z-0"
    @submit.prevent="onSubmit"
  >
    <NuxtLink to="/" class="mx-auto absolute top-20">
      <img src="~assets/logo.svg">
    </NuxtLink>
    <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 flex flex-col gap-4">
      <div class="flex gap-2 items-end">
        <h1 class="text-3xl font-bold capitalize">
          Register
        </h1>
        <span class="text-sm text-gray-400">or</span>
        <NuxtLink
          to="login"
          class="text-[#BFA8FC] underline font-semibold capitalize"
        >
          Login
        </NuxtLink>
      </div>

      <p class="text-sm text-gray-400">
        How do I get started blazein dolor at?
      </p>

      <UButton
        icon="i-logos-google-icon"
        variant="soft"
        label="Sign in with Google"
        block
      />

      <p class="text-sm text-gray-400">
        or
      </p>

      <UFormGroup name="email" size="xs">
        <UInput
          v-model="values.email"
          icon="i-ph-user-fill"
          placeholder="Username or Email"
        />
      </UFormGroup>
      <UFormGroup name="password" size="xs">
        <UInputPassword v-model="values.password" placeholder="Password" />
      </UFormGroup>
      <UFormGroup name="passwordConfirm" size="xs">
        <UInputPassword
          v-model="values.passwordConfirm"
          placeholder="Confirm Password"
        />
      </UFormGroup>

      <div class="flex items-center justify-between text-sm">
        <UCheckbox label="Remember me" />
        <NuxtLink to="/auth/forgot" class="text-[#BFA8FC]">
          Forgot Password?
        </NuxtLink>
      </div>

      <UButton label="Sign Up" block type="submit" :loading="loading" />
    </div>
  </UForm>
</template>
