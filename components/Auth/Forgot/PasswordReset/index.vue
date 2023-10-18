<script setup lang="ts">
import { ref } from 'vue'
import type { Form } from '#ui/types'
import { useRouter } from 'vue-router'
import { forgotPasswordSchema } from './schema'
import type { ForgotPasswordSchema } from './schema'
import useAsync from '@/composables/helper/async'
import useAuth from '@/composables/service/auth'

const { forgotPassword } = useAuth()
const { loading, makeAsyncOperation } = useAsync()

const form = ref<Form<ForgotPasswordSchema>>(null) // Başlangıçta form değeri null olarak atanıyor
const values = ref<Partial<ForgotPasswordSchema>>({
  password: undefined,
})

const router = useRouter()

async function onSubmit() {
  if (form.value) { // Form değeri null değilse
    await form.value.validate()
    makeAsyncOperation(async () => {
      await forgotPassword(values.value as ForgotPasswordSchema)
      router.push('/auth/login') // İşlem tamamlandıktan sonra login sayfasına yönlendiriliyor
    })
  }
}
</script>

<template>
  <UForm ref="form" :schema="forgotPasswordSchema" :state="values" class="relative w-full h-full flex flex-col items-center justify-center text-white z-0" @submit.prevent="onSubmit">
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
        <UInput v-model="values.password" icon="i-ph-mail-fill" placeholder="Email" />
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
