<script setup lang="ts">
import type { Platform } from '~/server/types'

interface Props {
  data: {
    id: string
    title: string
    description: string
    thumbnail: string
    url: string
    platform: Platform
    // FIXME: any
    participants: any[]
  }
}

defineProps<Props>()

function isOwner(participants: any[]) {
  return participants.find(participant => participant.is_owner)
}

const router = useRouter()

const PLATFORM = {
  YOUTUBE: 'i-mdi-youtube',
  VIMEO: 'i-mdi-vimeo',
  TWITCH: 'i-mdi-twitch',
}
</script>

<template>
  <button
    class="relative overflow-hidden w-90 h-90 flex flex-col items-center justify-center"
    @click="router.push(`/rooms/${data.id}`)"
  >
    <div class="w-full flex justify-between py-2 px-2">
      <div class="flex items-center justify-center gap-3">
        <UAvatar :src="isOwner(data.participants).users.avatar_url" size="sm" :alt="isOwner(data.participants).users.name || 'Le'" />
        <span class="text-sm font-medium">{{
          isOwner(data.participants).users.name
        }}</span>
      </div>
      <UIcon :name="PLATFORM[data.platform]" class="h-6 w-6" />
    </div>
    <div class="relative w-full">
      <div
        class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60"
      >
        <img
          class="w-full h-full object-cover rounded-[20px]"
          :src="data.thumbnail"
        >
      </div>
      <UAvatarGroup
        class="absolute bottom-5 right-5 -space-x-1"
        size="xs"
        :max="3"
      >
        <UAvatar
          v-for="participant in data.participants"
          :key="participant.id"
          :src="participant.users.avatar_url"
          :alt="participant.users?.name || 'Le'"
        />
        <template v-if="data.participants.length <= 2">
          <UAvatar
            v-for="i in 3 - data.participants.length"
            :key="i"
          />
        </template>
      </UAvatarGroup>
    </div>
    <div class="flex flex-col gap-1 w-full text-left py-2 px-1 font-medium">
      <span class="inline-block w-full truncate">
        {{ data.title }}
      </span>
      <span class="inline-block w-full text-xs text-white/50 truncate">
        {{ data.description }}
      </span>
    </div>
  </button>
</template>
