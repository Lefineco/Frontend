<script lang="ts" setup>
import { getVideoID } from '~/composables/helper'
import type { Database } from '~/server/types/supabase'

definePageMeta({
  layout: 'blank',
})

const route = useRoute<'rooms-id'>()

const user = useSupabaseUser()

const supabase = useSupabaseClient<Database>()

const player = ref()

const { data } = await supabase
  .from('rooms')
  .select('*, participants(id, is_owner, users(*))')
  .filter('id', 'eq', route.params.id)
  .single()

onMounted(() => {
  if (data?.url) {
    const playerInstance = player.value?.getPlayerInstance()

    playerInstance.autoplay = false // ! set to true
  }
})
</script>

<template>
  <div class="room-page">
    <LayoutHeader class="!relative" />

    <div class="wrapper">
      <div class="player-container">
        <UPlayer
          ref="player"
          :type="data?.platform"
          :video-id="getVideoID(data?.url)"
          class="h-2/3 rounded-2xl overflow-hidden"
          :is-owner="data?.participants?.find((p) => p.is_owner)?.users?.id === user?.id"
        />
        <!-- ... -->
      </div>

      <div class="chat-container">
        <div class="p-4 flex justify-between items-center w-full border-b border-white/5">
          <div class="flex flex-col w-2/3">
            <span class="text-lg truncate">
              {{ data?.title }}
            </span>

            <span class="text-sm w-full truncate text-white/50">
              {{ data?.description }}
            </span>
          </div>

          <UAvatarGroup size="sm" :max="3">
            <UAvatar
              v-for="participant in data?.participants"
              :key="participant.id"
              :src="participant.users?.avatar_url || ''"
              :alt="participant.users?.name || 'Le'"
            />
            <template v-if="data?.participants?.length ?? 0 <= 2">
              <UAvatar
                v-for="i in 3 - (data?.participants?.length ?? 0)"
                :key="i"
              />
            </template>
          </UAvatarGroup>
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
