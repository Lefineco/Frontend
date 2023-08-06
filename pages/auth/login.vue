<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

const supabase = useSupabaseClient()
const email = ref('')
const toast = useToast()

async function signInWithOtp() {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    },
  })
  if (error) {
    toast.add({
      id: 'error',
      title: error?.name,
      description: error?.message,
      icon: 'i-octicon-desktop-download-24',
      timeout: 2000,
      color: 'red',
    })
  }
}
</script>

<template>
  <AuthLoginOrRegister action="login" />
  <!-- <button @click="signInWithOtp">
    Sign In with E-Mail
  </button>
  <input
    v-model="email"
    type="email"
  > -->
</template>
