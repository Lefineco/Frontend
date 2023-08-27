<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
  $anime.set('.blob', {
    translateX: () => {
      return $anime.random(-500, window.innerWidth)
    },
    translateY: () => {
      return $anime.random(-500, window.innerHeight)
    },
    height: () => {
      return $anime.random(0, 1000)
    },
  })

  $anime({
    targets: '.blob',
    translateX: () => {
      return $anime.random(0, window.innerWidth)
    },
    translateY: () => {
      return $anime.random(0, window.innerHeight)
    },
    duration: 15000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
  })
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="blobs">
      <div v-for="blob in 20" :key="blob" class="blob" />
    </div>
    <div class="h-full bg-black/5 backdrop-blur-3xl ">
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
    @apply inset-0 absolute overflow-hidden;

    .blob {
      @apply absolute bg-primary-500/5 aspect-[1/1] rounded-full w-auto;
    }
  }
</style>
