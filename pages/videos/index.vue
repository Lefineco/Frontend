<script setup lang="ts">
const data = [
  { firstName: 'Gülümsemenin İzinde' },
  { firstName: 'Macera Ruhunun Peşinde' },
  { firstName: 'Rüya Dolu Anılar' },
  { firstName: 'Şehir Keşiflerinde' },
  { firstName: 'Sanatla İç İçe' },
  { firstName: 'Lezzetli Maceralar' },
  { firstName: 'Doğanın Dansı' },
  { firstName: 'Yaratıcılığın Kanatlarında' },
  { firstName: 'Müziğin Ritmiyle' },
  { firstName: 'Renklerle Dolu Anlar' },
  { firstName: 'Spor Tutkusu' },
  { firstName: 'Keşiflerin Peşinde' },
  { firstName: 'Fotoğrafın Hikayesi' },
  { firstName: 'Lezzetli Durağında' },
  { firstName: 'Mizah Dolu Anlar' },
  { firstName: 'Kitapların Dünyası' },
  { firstName: 'Sokak Röportajları' },
  { firstName: 'Dansın Ritmiyle' },
  { firstName: 'Teknoloji Keşifleri' },
  { firstName: 'Müziğin Sesiyle' },
]
</script>

<template>
  <div class="page">
    <div class="p-5">
      <p class="md:text-xl">
        Recommended Videos
      </p>

      <div class="py-7 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <CardsVideos v-for="(item, idx) in data" :key="idx" :name="item.firstName" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
