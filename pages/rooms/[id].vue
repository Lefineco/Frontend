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
  .select('*, participants(is_owner, users(*))')
  .filter('id', 'eq', (route.params as any).id)
  .single()

onMounted(() => {
  if (data?.url) {
    const playerInstance = player.value?.getPlayerInstance()

    playerInstance.autoplay = true
  }
})
</script>

<template>
  <UModal v-model="isOpen">
    <RoomInvite @close-modals="isOpen = false" />
  </UModal>
  <div class="page h-full flex flex-col w-full">
    <div class="flex justify-between w-full">
      <div class="flex flex-col lg:flex-row items-center pb-4 gap-3">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          size="md"
        />
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm">Berke</span>
          <span class="text-xs text-gray-500 font-medium">Room Owner</span>
        </div>
      </div>
      <div class="flex items-center justify-center gap-2">
        <UAvatarGroup size="sm" :max="3">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="benjamincanac"
          />
          <UAvatar
            src="https://avatars.githubusercontent.com/u/904724?v=4"
            alt="Atinux"
          />
          <UAvatar
            src="https://avatars.githubusercontent.com/u/7547335?v=4"
            alt="smarroufin"
          />
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="benjamincanac"
          />
          <UAvatar
            src="https://avatars.githubusercontent.com/u/7547335?v=4"
            alt="smarroufin"
          />
        </UAvatarGroup>
        <UButton
          class="!text-gray-600"
          variant="ghost"
          size="xl"
          icon="i-ph-plus-circle"
          @click="isOpen = true"
        />
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

<style lang="scss" scoped></style>
