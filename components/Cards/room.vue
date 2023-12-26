<script setup lang="ts">
import type { SupabaseRooms } from '~/pages/index.vue'
import type { ArrayElement, Platform } from '~/server/types'

interface Props {
  data: ArrayElement<SupabaseRooms>
}

const props = defineProps<Props>()
const router = useRouter()

const PLATFORM = {
  YOUTUBE: 'i-mdi-youtube',
  VIMEO: 'i-mdi-vimeo',
  TWITCH: 'i-mdi-twitch',
}

const owner = props.data.participants.find(
  participant => participant.is_owner,
)
const ownerName = owner?.users?.name || 'Le'
</script>

<template>
  <button
    class="relative overflow-hidden w-90 h-90 flex flex-col items-center justify-center"
    @click="router.push(`/rooms/${props.data.id}`)"
  >
    <div class="w-full flex justify-between py-2 px-2">
      <div class="flex items-center justify-center gap-3">
        <UAvatar
          :src="owner?.users?.avatar_url || ''"
          size="sm"
          :alt="ownerName"
        />
        <span class="text-sm text-left font-medium gap-1 w-36 truncate">
          <span class="text-xs opacity-50 font-medium">Provide by</span>
          {{ ownerName.split(' ')[0] }}
        </span>
      </div>
      <UIcon
        :name="PLATFORM[props.data.platform as Platform]"
        class="h-6 w-6"
      />
    </div>
    <div class="relative w-full">
      <div
        class="relative overflow-hidden rounded-2xl w-full after:content-[''] after:absolute after:inset-0 after:bg-black/60"
      >
        <img
          class="w-full h-full object-cover rounded-[20px]"
          :src="props.data.thumbnail || ''"
        >
      </div>
      <UAvatarGroup
        class="absolute bottom-5 right-5 -space-x-1"
        size="xs"
        :max="3"
      >
        <UAvatar
          v-for="participant in props.data.participants"
          :key="participant.users?.id"
          :src="participant.users?.avatar_url || ''"
          :alt="participant.users?.name || ''"
        />
      </UAvatarGroup>
    </div>
  </button>
</template>
