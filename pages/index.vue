<script setup lang="ts">
// const preference = ['system', 'light', 'dark', 'sepia']
const data = [
  { name: 'Berke Kayada' },
  { name: 'Furkan Erdoğan' },
  { name: 'Cansu Altun' },
  { name: 'Fatih Yıldız' },
]
</script>

<template>
  <div class="page">
    <div class="p-5 w-full">
      <HomeBanner />
    </div>
    <div class="p-5 w-full">
      <div class="flex justify-between items-start">
        <p class="text-md md:text-xl">
          Popular Live Rooms
        </p>
        <UButton to="/rooms" trailing variant="secondary" icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <CardsRoom v-for="(item, idx) in data" :key="idx" :name="item.name" />
      </div>
    </div>

    <div class="p-5 w-full">
      <div class="flex justify-between items-start">
        <p class="text-md md:text-xl">
          Recommended Lefiners
        </p>
        <UButton trailing variant="secondary" icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class="py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4">
        <CardsProfile />
      </div>
    </div>

    <div class="p-5 w-full">
      <div class="flex justify-between items-start">
        <p class="text-md md:text-xl break-words tracking-wide">
          Recommended Videos
        </p>
        <UButton trailing variant="secondary" icon="i-ph-arrow-right">
          Daha Fazla
        </UButton>
      </div>
      <div class=" py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        <CardsVideos />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
