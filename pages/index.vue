<script setup lang="ts">
const preference = ['system', 'light', 'dark', 'sepia']
const data = [
  { name: 'Berke Kayada' },
  { name: 'Furkan Erdoğan' },
  { name: 'Cansu Altun' },
  { name: 'Fatih Yıldız' },
  { name: 'Emin Mehmet' },
  { name: 'Emin Mehmet' },
]
</script>

<template>
  <div class="w-full">
    <div class="p-5 w-full">
      <HomeBanner />
    </div>
    <div class="p-5 w-full">
      <div class="flex justify-between">
        <p class="text-2xl">
          Popular Live Rooms
        </p>
        <UButton trailing icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7 grid grid-cols-6  gap-4">
        <CardsRoom v-for="(item, idx) in data" :key="idx" :name="item.name" />
      </div>
    </div>

    <div class="p-5 w-full">
      <div class="flex justify-between">
        <p class="text-2xl">
          Recommended Lefiners
        </p>
        <UButton trailing icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7  grid grid-cols-4   gap-4">
        <CardsProfile />
      </div>
    </div>

    <div class="p-5 w-full">
      <div class="flex justify-between">
        <p class="text-2xl">
          Recommended Videos
        </p>
        <UButton trailing icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7  grid grid-cols-4   gap-4">
        <CardsVideos />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
