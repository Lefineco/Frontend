<script setup lang="ts">
const showPassword = ref(false)
function togglePassword() {
  return showPassword.value = !showPassword.value
}
</script>

<template>
  <UInput icon="i-ph-lock" :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'">
    <template #trailing>
      <UButton
        color="gray"
        variant="link"
        :icon="showPassword ? 'i-ph-eye-slash' : 'i-ph-eye'"
        :padded="false"
        @click="togglePassword"
      />
    </template>
  </UInput>
</template>

<style scoped>

</style>
