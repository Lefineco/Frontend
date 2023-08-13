<script setup lang="ts">
const data = [
  { name: 'Berke Kayada' },
  { name: 'Furkan Erdoğan' },
  { name: 'Cansu Altun' },
  { name: 'Emin Mehmet' },
]
const data2 = [
  { name: 'Cans', createDate: '2 Days Ago', description: 'Deneme Canim' },
  { name: 'Cans', createDate: '2 Days Ago', description: 'Deneme Canim' },
  { name: 'Cans', createDate: '2 Days Ago', description: 'Deneme Canim' },
]
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="p-5 col-span-8 max-w-7xl mx-auto space-y-6">
      <Feeds
        v-for="(item, idx) in data2"
        :key="idx"
        :name="item.name"
        :create-date="item.createDate"
      />
    </div>
    <div class="col-span-3 flex flex-col space-y-4">
      <div class="flex flex-col space-y-2">
        <h2 class="font-bold font-base">
          Recomennded Lefiners
        </h2>
        <CardsProfile
          v-for="(item, idx) in data"
          :key="idx"
          :name="item.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
