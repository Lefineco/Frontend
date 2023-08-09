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
  <LayoutHeader />
  <div class="blobs">
    <div v-for="blob in 20" :key="blob" class="blob" />
  </div>
  <div class="flex h-full items-start bg-black/5 backdrop-blur-3xl overflow-y-auto">
    <LayoutSidebar class="w-20  p-4" />
    <slot />
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
