<script setup lang="ts">
import type { Lefiners } from '~/server/types'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()

if (!store.lefiners?.length) {
  const { data } = await supabase
    .from('users')
    .select('*')
    .filter('name', 'neq', null)

  store.lefiners = data as Lefiners[]
}

const data2 = [
  {
    name: 'Cans',
    createDate: '2 Days Ago',
    description: 'Deneme Canim',
    avatar: 'https',
    viewers: 't',
  },
]
</script>

<template>
  <div class="page grid grid-cols-12">
    <div class="p-5 col-span-8 max-w-7xl mx-auto space-y-6">
      <FeedsFormCreate />
      <Feeds
        v-for="(item, idx) in data2"
        :key="idx"
        :name="item.name"
        :avatar="item.avatar"
        :viewers="item.viewers"
        :create-date="item.createDate"
      />
    </div>
    <div class="col-span-3 flex flex-col space-y-4">
      <div class="flex flex-col space-y-2">
        <h2 class="font-bold font-base">
          Recomennded Lefiners
        </h2>
        <div class="space-y-6">
          <CardsProfile
            v-for="(item, idx) in store.lefiners?.slice(0, 4)"
            :key="idx"
            :data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
