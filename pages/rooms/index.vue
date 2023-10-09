<script setup lang="ts">
import type { Room } from '~/server/types'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()

if (!store.rooms?.length) {
  const { data } = await supabase
    .from('rooms')
    .select('*, participants(is_owner, users(*))')

  store.rooms = data as Room[]
}
</script>

<template>
  <div class="page">
    <div class="p-5">
      <p class="md:text-xl">
        Popular Live Rooms
      </p>

      <div class="py-7 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <CardsRoom v-for="(item, idx) in store.rooms" :key="idx" :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
