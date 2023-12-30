<script lang="ts" setup>
import { toast } from '~/composables/helper/toast'
import type { TableRows } from '~/server/types'
import type { Database } from '~/server/types/supabase'

interface Props {
  roomId: string
}

type Chat = TableRows<'chat'>

export type GroupedMessages = [string, Chat[]]

const props = defineProps<Props>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const chatMessages = ref<Chat[]>([])

const { data: initialChat, error } = await supabase
  .from('chat')
  .select('*')
  .filter('room_id', 'eq', props.roomId)

if (error)
  toast('Failed to fetch chat messages', error.message, 'error')

function groupMessages(messages: Chat[]): GroupedMessages[] {
  messages.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())

  const userMessages: GroupedMessages[] = []
  let currentGroup: GroupedMessages | null = null

  for (const message of messages) {
    const { user_id } = message

    if (!currentGroup || currentGroup[0] !== user_id) {
      currentGroup = [user_id!, [message]]
      userMessages.push(currentGroup)
    }
    else {
      currentGroup[1].push(message)
    }
  }

  return userMessages
}

const roomChannel = supabase
  .channel(`chat_${props.roomId}`)
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'chat',
      filter: `room_id=eq.${props.roomId}`,
    },
    (payload) => {
      chatMessages.value = [...chatMessages.value, payload.new] as Chat[]
    },
  )
  .subscribe()

async function sendMessage(message: string) {
  if (!user.value) {
    return toast(
      'You must be logged in to send a message',
      'Please login and try again',
      'error',
    )
  }

  if (message === '')
    return false

  const { error } = await supabase
    .from('chat')
    .insert({
      message,
      avatar_url: user.value.user_metadata.avatar_url,
      room_id: props.roomId,
      user_id: user.value.id,
    })
    .select()

  if (error)
    toast('Message failed to send', error.message, 'error')
}

onMounted(() => {
  chatMessages.value = initialChat || []
})

onUnmounted(() => {
  supabase.removeChannel(roomChannel)
})
</script>

<template>
  <div class="chat">
    <div class="messages">
      <template
        v-for="messagesGroup in groupMessages(chatMessages)"
        :key="messagesGroup[0]"
      >
        <RoomChatMessage :data="messagesGroup" />
      </template>
    </div>
    <RoomChatInput :send-message="sendMessage" />
  </div>
</template>

<style lang="postcss" scoped>
.chat {
  @apply overflow-hidden flex flex-col w-full h-full pb-4;

  .messages {
    @apply w-full h-full overflow-y-scroll px-4 flex flex-col gap-4 py-4;
  }
}
</style>
