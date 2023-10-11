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
  <div class="w-full h-full flex flex-col">
    <HomeBanner />
    <div class="bg-gradient-to-b from-black z-10">
      <div class="page -mt-[36em]">
        <div class="p-5 w-full">
          <div class="flex justify-between items-start">
            <p class="text-md md:text-xl font-medium">
              Popular Live Rooms
            </p>
            <UButton
              v-if="(store.rooms?.length ?? 0) > 4"
              to="/rooms"
              trailing
              variant="soft"
              icon="i-ph-arrow-right"
            >
              Daha Fazla
            </UButton>
          </div>
          <div
            class="py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <CardsRoom
              v-for="(item, idx) in store.rooms?.slice(0, 4)"
              :key="idx"
              :data="item"
            />
          </div>
        </div>
        <div class="p-5 w-full">
          <div class="flex justify-between items-start">
            <p class="text-md md:text-xl font-medium">
              Recommended Lefiners
            </p>
            <UButton
              v-if="(store.lefiners?.length ?? 0) > 4"
              to="/lefiners"
              trailing
              variant="soft"
              icon="i-ph-arrow-right"
            >
              Daha Fazla
            </UButton>
          </div>
          <div class="py-7 flex gap-6">
            <CardsProfile
              v-for="(item, idx) in store.lefiners
                ?.slice(0, 4)
                .filter((item) => item.id !== user?.id)"
              :key="idx"
              :data="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
