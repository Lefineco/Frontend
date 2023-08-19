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
  <div class="page">
    <div class="p-5">
      <p class="md:text-xl">
        Recommended Lefiners
      </p>

      <div class="py-7 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        <CardsProfile v-for="(item, idx) in data" :key="idx" :name="item.firstName" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
