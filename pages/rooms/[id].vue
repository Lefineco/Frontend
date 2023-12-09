<script lang="ts" setup>
import { getVideoID } from '~/composables/helper'
import type { Platform } from '~/server/types'
import type { Database } from '~/server/types/supabase'

definePageMeta({
  layout: 'blank',
})

const route = useRoute<'rooms-id'>()

const supabase = useSupabaseClient<Database>()

const player = ref()

const { data } = await supabase
  .from('rooms')
  .select('*, participants(id, is_owner, users(*))')
  .filter('id', 'eq', route.params.id)
  .single()

const PLATFORM = data?.platform as Platform

onMounted(() => {
  if (data?.url) {
    const playerInstance = player.value?.getPlayerInstance()

    playerInstance.autoplay = true
  }
})
</script>

<template>
  <div class="room-page">
    <LayoutHeader />

    <div class="wrapper">
      <div class="player-container">
        <UPlayer
          ref="player"
          :type="PLATFORM"
          :video-id="getVideoID(data?.url)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.room-page {
  @apply flex flex-col h-full;

  .wrapper {
    @apply flex pt-24 h-full w-full items-start overflow-y-auto;

    .player-container {
      @apply flex flex-col items-center w-full;
    }
  }
}
</style>
