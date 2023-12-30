<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  // validate(route) {
  //   return route.params.username === 'admin'
  // },
})

// const route = useRoute<'username'>()
// const { username } = route.params
</script>

<template>
  <div class="page flex flex-col w-full h-full p-4 md:!pt-20">
    <ProfileSection />
    <ProfileSettings />
  </div>
</template>

<style scoped></style>
