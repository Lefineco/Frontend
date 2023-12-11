<script setup lang="ts">
const user = useSupabaseUser()

computed(() => {
  if (user.value)
    reloadNuxtApp({ force: true })
})
</script>

<template>
  <div class="lefine">
    <div class="wrapper">
      <NuxtLayout>
        <NuxtLoadingIndicator color="#6366f1" :throttle="1" :height="1" />
        <NuxtPage />
      </NuxtLayout>
    </div>
    <UNotifications />
  </div>
</template>

<style lang="postcss" scoped>
.lefine {
  @apply h-full flex flex-col;

  .wrapper {
    @apply h-full w-full;
  }
}
</style>
