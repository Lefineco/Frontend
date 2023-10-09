<script setup lang="ts">
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()

if (!store.lefiners?.length) {
  const { data } = await supabase
    .from('users')
    .select('*')
    .filter('name', 'neq', null)

  store.lefiners = data
}
</script>

<template>
  <div class="page">
    <div class="p-5">
      <p class="md:text-xl">
        All Lefiners
      </p>

      <div class="py-7 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
        <CardsProfile v-for="(item, idx) in store.lefiners" :key="idx" :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
