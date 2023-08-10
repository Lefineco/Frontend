<script setup lang="ts">
const data = [
  { firstName: 'Aylin Kaya' },
  { firstName: 'Emre Yılmaz' },
  { firstName: 'Elif Demir' },
  { firstName: 'Burak Şahin' },
  { firstName: 'Zeynep Avcı' },
  { firstName: 'Ahmet Çelik' },
  { firstName: 'Deniz Arslan' },
  { firstName: 'Esra Öztürk' },
  { firstName: 'Barış Karadağ' },
  { firstName: 'Gamze Kocaman' },
  { firstName: 'Can Yıldırım' },
  { firstName: 'İpek Taş' },
  { firstName: 'Mert Sönmez' },
  { firstName: 'Yasemin Özkan' },
  { firstName: 'Cem Şeker' },
  { firstName: 'Nazlı Akgün' },
  { firstName: 'Ali Tuna' },
  { firstName: 'Nil Kılıç' },
  { firstName: 'Kaan Eren' },
  { firstName: 'Melike Koç' },
]
</script>

<template>
  <div class="p-5  w-full">
    <p class="text-md md:text-xl">
      Popular Live Rooms
    </p>

    <div class="py-7 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
      <CardsRoom v-for="(item, idx) in data" :key="idx" :name="item.firstName" />
    </div>
  </div>
</template>

<style scoped>

</style>
