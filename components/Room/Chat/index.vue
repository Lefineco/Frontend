<script lang="ts" setup>
import type { Undefinable } from '@0fatihyildiz/fast-ts-utilities'
import type { Database } from '~/server/types/supabase'

interface Props {
  roomId: Undefinable<string>
}

const props = defineProps<Props>()

const supabase = useSupabaseClient<Database>()

const { data: chatMessages } = await supabase
  .from('chat')
  .select('*, participants(id, users(*))')
  .filter('participants.room_id', 'eq', props?.roomId)
</script>

<template>
  <div class="chat">
    <div class="w-full h-full overflow-y-scroll px-4">
      <RoomChatMessage v-for="message in chatMessages" :key="message.id" :data="message" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.chat {
  @apply flex flex-col w-full h-full py-4 overflow-y-scroll;
}
</style>
