<script setup lang="ts">
import type { Database } from '~/server/types/supabase'

const supabase = useSupabaseClient<Database>()

const rooms = ref()

const { data } = await supabase
  .from('rooms')
  .select('*, participants(is_owner, users(*))')

rooms.value = data
</script>

<template>
  <div class="page">
    <div class="p-5">
      <p class="md:text-xl">
        Popular Live Rooms
      </p>

      <div class="py-7 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        <CardsRoom v-for="(item, idx) in rooms" :key="idx" :data="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
