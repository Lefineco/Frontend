<script setup lang="ts">
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const store = useGeneralStore()

export type SupabaseRooms = typeof supabaseRooms
export type SupabaseLefiner = typeof supabaseLefiner

const { data: supabaseRooms } = await supabase
  .from('rooms')
  .select('*, participants(is_owner, profiles(*))')

const { data: supabaseLefiner } = await supabase
  .from('profiles')
  .select('*, follows!follows_following_id_fkey(follower_id)')
  .filter('full_name', 'neq', null)

store.rooms = supabaseRooms?.sort((a, b) => a.participants.length - b.participants.length) || []
store.lefiners = supabaseLefiner?.sort((a, b) => b.follows.length - a.follows.length) || []
</script>

<template>
  <div class="page">
    <SharedCategory class="px-5" title="Popular Live Rooms" to="rooms" :length="store.rooms?.length">
      <SharedCardsRoom
        v-for="(item, idx) in store.rooms?.slice(0, 4)"
        :key="idx"
        :data="item"
      />
    </SharedCategory>
    <SharedCategory class="px-5" title="Popular Lefiners" to="lefiners" :length="store.lefiners?.length">
      <SharedCardsProfile
        v-for="(item, idx) in store.lefiners
          ?.slice(0, 5)
          .filter((item) => item.id !== user?.id)"
        :key="idx"
        :data="item"
      />
    </SharedCategory>
  </div>
</template>
