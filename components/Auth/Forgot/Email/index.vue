<script setup lang="ts">
import { ref } from 'vue'
import type { ForgotPasswordEmailSchema } from './schema'
import { forgotPasswordEmailSchema } from './schema'

import type { Form } from '@/nuxthq/ui/dist/runtime/types'
import useAsync from '@/composables/async'
import useAuth from '@/composables/auth'

const { forgotPasswordEmailSchemas } = useAuth()
const { loading, makeAsyncOperation } = useAsync()

const form = ref<Form<ForgotPasswordEmailSchema>>(null)
const values = ref<Partial<ForgotPasswordEmailSchema>>({
  email: undefined,
})

async function onSubmit() {
  if (form.value) {
    await form.value.validate()
    makeAsyncOperation(async () => {
      await forgotPasswordEmailSchemas(values.value as ForgotPasswordEmailSchema)
    })
  }
}
</script>

<template>
  <UForm ref="form" :schema="forgotPasswordEmailSchema" :state="values" class="relative w-full h-full flex flex-col items-center justify-center text-white z-0" @submit.prevent="onSubmit">
    <NuxtLink to="/" class="mx-auto absolute top-20">
      <img src="~assets/logo.svg">
    </NuxtLink>
    <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 flex flex-col gap-4">
      <h1 class="text-3xl font-bold capitalize">
        Forgot Password
      </h1>
      <p class="text-sm text-gray-400">
        Please enter your email to reset your password.
      </p>
      <UFormGroup name="email" size="xs">
        <UInput v-model="values.email" icon="i-ph-mail-fill" placeholder="Email" />
      </UFormGroup>
      <UButton label="Reset Password" block type="submit" :loading="loading" />
      <div class="text-sm text-gray-400 mt-4">
        <NuxtLink to="/auth/login">
          Back to Login
        </NuxtLink>
      </div>
    </div>
  </UForm>
</template>
