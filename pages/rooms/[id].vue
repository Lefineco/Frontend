<script lang="ts" setup>
import type { RealtimeChannel } from '@supabase/supabase-js'
import { getVideoID } from '~/composables/helper'
import type { Database } from '~/server/types/supabase'

definePageMeta({
  layout: 'blank',
})

let roomChannel: RealtimeChannel

const route = useRoute<'rooms-id'>()

const user = useSupabaseUser()

const supabase = useSupabaseClient<Database>()

const player = ref()

const realtimeResponse = ref()

const { data } = await supabase
  .from('rooms')
  .select('*, participants(id, is_owner, profiles(*))')
  .filter('id', 'eq', route.params.id)
  .single()

const is_owner
  = data?.participants?.find(p => p.is_owner)?.profiles?.id === user.value?.id

async function onPlay() {
  return supabase
    .from('rooms')
    .update({ on_play: true })
    .eq('id', route.params.id)
}

async function onPause() {
  return supabase
    .from('rooms')
    .update({ on_play: false })
    .eq('id', route.params.id)
}

async function onSeeked() {
  return supabase
    .from('rooms')
    .update({ current_time: player.value?.getPlayerInstance().currentTime })
    .eq('id', route.params.id)
}

const realtimeResponseWatch = watch(realtimeResponse, () => {
  if (realtimeResponse.value?.on_play !== undefined && !is_owner) {
    const playerInstance = player.value?.getPlayerInstance()

    if (realtimeResponse.value.on_play)
      playerInstance.play()
    else playerInstance.pause()
  }

  if (realtimeResponse.value?.current_time !== undefined && !is_owner) {
    const playerInstance = player.value?.getPlayerInstance()

    playerInstance.currentTime = realtimeResponse.value.current_time
  }
})

onMounted(async () => {
  roomChannel = supabase
    .channel(`player_${route.params.id}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'rooms',
        filter: `id=eq.${route.params.id}`,
      },
      (payload) => {
        realtimeResponse.value = payload.new
      },
    )
    .subscribe()

  if (data?.url) {
    const playerInstance = player.value?.getPlayerInstance()

    playerInstance.autoplay = true

    if (!is_owner)
      return false

    playerInstance.on('play', onPlay)
    playerInstance.on('pause', onPause)
    playerInstance.on('seeked', onSeeked)
  }
})

onUnmounted(() => {
  supabase.removeChannel(roomChannel)
  realtimeResponseWatch()
})
</script>

<template>
  <div class="room-page">
    <LayoutHeader />

    <div class="wrapper">
      <div class="player-container">
        <UPlayer
          ref="player"
          :type="data?.platform"
          :video-id="getVideoID(data?.url)"
          class="h-2/3 rounded-2xl overflow-hidden"
          :is-owner="is_owner"
        />
      </div>

      <div class="chat-container">
        <div
          class="p-4 flex justify-between items-center w-full border-b border-white/5"
        >
          <div class="flex flex-col w-2/3">
            <span class="text-lg truncate">
              {{ data?.title }}
            </span>

            <span class="text-sm w-full truncate text-white/50">
              {{ data?.description }}
            </span>
          </div>

          <RoomParticipants v-if="data" :participants="data.participants" />
        </div>

        <RoomChat :room-id="data?.id || 'Lefine'" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.room-page {
  @apply flex flex-col h-full w-full;

  .wrapper {
    @apply flex overflow-hidden h-full w-full p-6 gap-8;

    .player-container {
      @apply h-full w-2/3 overflow-hidden;
    }

    .chat-container {
      @apply flex flex-col h-full w-1/3 bg-white/5 rounded-2xl;
    }
  }
}
</style>
