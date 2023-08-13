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
  <div class="page">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-12 lg:col-span-9 flex flex-col gap-8">
        <div>
          <div class="flex items-center justify-between mb-4">
            <h1 class="font-bold text-xl">
              Community Feeds
            </h1>
            <div class="flex items-center justify-between gap-2">
              <UButton variant="secondary">
                All
              </UButton>
              <UButton variant="secondary" icon="i-ph-funnel-simple-bold" />
            </div>
          </div>
          <FeedsFormCreate />
        </div>

        <div class="flex flex-col gap-8">
          <CardsFeed
            v-for="(item, idx) in data2"
            :key="idx"
            :name="item.name"
            :create-date="item.createDate"
          />
        </div>
      </div>
      <div class="col-span-12 lg:col-span-3 flex flex-col">
        <div class="flex flex-col">
          <h2 class="font-bold text-xl mb-4">
            Recommended Lefiners
          </h2>
          <div class="flex flex-col gap-8">
            <CardsProfile
              v-for="(item, idx) in data"
              :key="idx"
              :name="item.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
