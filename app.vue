<script setup lang="ts">
const user = useSupabaseUser()

computed(() => {
  if (user.value)
    reloadNuxtApp({ force: true })
})
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- <div class="blobs">
      <div v-for="blob in 20" :key="blob" class="blob" />
    </div> -->
    <div class="h-full bg-black/5">
      <NuxtLayout>
        <NuxtLoadingIndicator color="#6366f1" :throttle="1" :height="1" />
        <NuxtPage />
      </NuxtLayout>
    </div>
    <UNotifications />
  </div>
</template>

<style lang="postcss" scoped>
.blobs {
  @apply inset-0 absolute overflow-hidden pointer-events-none;

  .blob {
    @apply hidden sm:block absolute bg-primary-700/5 aspect-[1/1] rounded-full w-auto blur-3xl;
  }
}
</style>
