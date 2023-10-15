<script setup lang="ts">
import type { Lefiners, Room } from '~/server/types'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const store = useGeneralStore()

const { data: supabaseRooms } = await supabase
  .from('rooms')
  .select('*, participants(is_owner, users(*))')

const { data: supabaseLefiner } = await supabase
  .from('users')
  .select('*, follows!follows_following_id_fkey(follower_id)')
  .filter('name', 'neq', null)

// TODO: maybe Fix this
store.rooms = supabaseRooms as Room[]
store.lefiners = supabaseLefiner as Lefiners[]
</script>

<template>
  <div class="main">
    <HomeBanner />
    <div class="wrapper">
      <div class="page -mt-[30em]">
        <SharedCategory class="px-5" title="Popular Live Rooms" to="/rooms" :data="store.rooms">
          <CardsRoom
            v-for="(item, idx) in store.rooms?.slice(0, 4)"
            :key="idx"
            :data="item"
          />
        </SharedCategory>
        <SharedCategory class="px-5" title="Popular Live Rooms" to="/lefiners" :data="store.lefiners">
          <CardsProfile
            v-for="(item, idx) in store.lefiners
              ?.slice(0, 4)
              .filter((item) => item.id !== user?.id)"
            :key="idx"
            :data="item"
          />
        </SharedCategory>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.main {
  @apply w-full h-full flex flex-col;

  .wrapper {
    @apply bg-gradient-to-b from-black z-10;

  }
}
</style>
