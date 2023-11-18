<script setup lang="ts">
import { getVideoID } from '~/composables/helper'
import type { Platform } from '~/server/types'
import type { Database } from '~/server/types/supabase'

const supabase = useSupabaseClient<Database>()
const isLargeScreen = useMediaQuery('(min-width: 768px)')

const player = ref()
const isOpen = ref(false)
const { height } = useElementSize(player)

const route = useRoute()
definePageMeta({
  layout: 'room',
})

const { data } = await supabase
  .from('rooms')
  .select('*, participants(id, is_owner, users(*))')
  .filter('id', 'eq', (route.params as any).id)
  .single()

onMounted(() => {
  if (data?.url) {
    const playerInstance = player.value?.getPlayerInstance()

    playerInstance.autoplay = true
  }
})

const roomOwner = data?.participants.find(p => p.is_owner)?.users
</script>

<template>
  <UModal v-model="isOpen">
    <RoomInvite @close-modals="isOpen = false" />
  </UModal>
  <div class="mt-24 h-full flex flex-col w-full">
    <div class="flex px-4 justify-between w-full">
      <div class="flex flex-col lg:flex-row items-center pb-4 gap-3">
        <UAvatar
          :src="roomOwner?.avatar_url || ''"
          :alt="roomOwner?.name || 'AN'"
          size="md"
        />
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm">{{ roomOwner?.name }}</span>
          <span class="text-xs text-gray-500 font-medium">Room Owner</span>
        </div>
      </div>
      <div class="flex items-center justify-center gap-2">
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
        <!-- <UButton
          class="!text-gray-600"
          variant="ghost"
          icon="i-ph-plus-circle"
          @click="isOpen = true"
        /> -->
      </div>
    </div>
    <div class="flex flex-col md:flex-row w-full gap-4">
      <div class="w-full md:w-3/5">
        <UPlayer
          ref="player"
          :type="data?.platform as Platform"
          :video-id="getVideoID(data?.url as string)"
        />
      </div>
      <div
        v-if="height"
        class="w-full md:w-2/5"
        :style="{ height: isLargeScreen ? `${height}px` : '30rem' }"
      >
        <RoomChatorPlayList />
      </div>
      <div v-else class="h-full w-2/5">
        <USpin />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
