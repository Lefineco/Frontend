<script setup lang="ts">

</script>

<template>
  <div class="page">
    <div class="p-5">
      <p class="md:text-xl">
        Popular Live Rooms
      </p>

      <div class="py-7 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <CardsRoom v-for="(item, idx) in data" :key="idx" :name="item.firstName" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
