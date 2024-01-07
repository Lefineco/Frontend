<script setup lang="ts">
import type { Lefiners } from '~/server/types'
import type { Database } from '~/server/types/supabase'
import { useGeneralStore } from '~/store'

const supabase = useSupabaseClient<Database>()
const store = useGeneralStore()
const user = useSupabaseUser()

if (!store.lefiners?.length) {
  const { data } = await supabase
    .from('profiles')
    .select('*, follows!follows_following_id_fkey(follower_id)')
    .filter('full_name', 'neq', null)

  store.lefiners = data as Lefiners[]
}
</script>

<template>
  <div class="page">
    <SharedCategory
      class="p-5"
      title="All Lefiners"
      to="/lefiners"
      :data="store.lefiners"
    >
      <SharedCardsProfile
        v-for="(item, idx) in store.lefiners?.filter(
          (item) => item.id !== user?.id,
        )"
        :key="idx"
        :data="item"
      />
    </SharedCategory>
  </div>
</template>

<style scoped></style>
