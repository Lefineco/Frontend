<script setup lang="ts">
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()

if (!store.rooms?.length) {
  const { data } = await supabase
    .from('rooms')
    .select('*, participants(is_owner, profiles(*))')

  store.rooms = data
}
</script>

<template>
  <div class="page">
    <SharedCategory
      class="p-5"
      title="All Live Rooms"
      to="/rooms"
      :data="store.rooms"
      all
    >
      <CardsRoom v-for="(item, idx) in store.rooms" :key="idx" :data="item" />
    </SharedCategory>
  </div>
</template>

<style scoped></style>
