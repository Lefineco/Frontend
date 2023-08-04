<script setup lang="ts">
const preference = ['system', 'light', 'dark', 'sepia']
const data = [
  { name: 'Berke Kayada' },
  { name: 'Furkan Erdoğan' },
  { name: 'Cansu Altun' },
  { name: 'Emin Mehmet' },
]
</script>

<template>
  <div>
    <div class="p-5 grid grid-cols-4 max-w-7xl mx-auto gap-4">
      <CardsRoom v-for="(item, idx) in data" :key="idx" :name="item.name" />
    </div>
    <div class="p-5 grid grid-cols-4 max-w-7xl mx-auto gap-4">
      <CardsProfile />
    </div>
    <div class="p-5 grid grid-cols-4 max-w-7xl mx-auto gap-4">
      <CardsVideos />
    </div>
  </div>
</template>

<style scoped></style>
