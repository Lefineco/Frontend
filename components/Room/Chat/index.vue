<script lang="ts" setup>
import { toast } from '~/composables/helper/toast'

import type { TableRows } from '~/server/types'
import type { Database } from '~/server/types/supabase'
import { useChatStore } from '~/store/chat'

interface Props {
	roomId: string
}

type Chat = TableRows<'chat'>

export type GroupedMessages = [string, Chat[]]

const props = defineProps<Props>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const chatStore = useChatStore()

const chatMessages = ref<Chat[]>([])
const EMPTY_STRING_REGEXP = /^[\s\uFEFF\xA0]+$/
const chat = ref<HTMLDivElement | null>(null)
const messageHistoryLimit = ref(20)

const { data: initialChat, error } = await useAsyncData(
	'mountains',
	async () => {
		const { data } = await supabase
			.from('chat')
			.select('*')
			.filter('room_id', 'eq', props.roomId).limit(messageHistoryLimit.value).order('created_at', { ascending: false })

		return data
	},
)

if (error.value)
	toast('Failed to fetch chat messages', error.value?.message || '', 'error')

function groupMessages(messages: Chat[]): GroupedMessages[] {
	messages.sort(
		(a, b) =>
			new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
	)

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

			if (payload.eventType === 'INSERT' && payload.new.user_id !== user.value?.id)
				chatStore.newMessage++
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

	if (EMPTY_STRING_REGEXP.test(message)) {
		return toast(
			'You cannot send an empty message',
			'Please type something and try again',
			'error',
		)
	}

	if (message.length > 500) {
		return toast(
			'Your message is too long',
			'Please shorten your message and try again',
			'error',
		)
	}

	if (message.length < 1) {
		return toast(
			'Your message is too short',
			'Please lengthen your message and try again',
			'error',
		)
	}

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

useInfiniteScroll(
	chat,
	async () => {
		messageHistoryLimit.value += 20

		const { data } = await supabase
			.from('chat')
			.select('*')
			.filter('room_id', 'eq', props.roomId).limit(messageHistoryLimit.value).order('created_at', { ascending: false })

		chatMessages.value = data || []
	},
	{ distance: 2, direction: 'top', behavior: 'smooth' },
)

onMounted(() => {
	chatMessages.value = initialChat.value || []
})

onUnmounted(() => {
	supabase.removeChannel(roomChannel)
})
</script>

<template>
	<div class="chat">
		<ClientOnly>
			<div ref="chat" class="messages">
				<RoomChatMessage
					v-for="messagesGroup in groupMessages(chatMessages)" :key="messagesGroup[0]"
					:data="messagesGroup"
				/>
			</div>

			<RoomChatScrollAction v-if="chat" :chat-instance="chat" />
			<RoomChatInput :send-message="sendMessage" />
		</ClientOnly>
	</div>
</template>

<style lang="postcss" scoped>
.chat {
	@apply overflow-hidden relative flex flex-col w-full h-full pb-4;

	.messages {
		@apply w-full h-full overflow-y-scroll px-4 flex flex-col gap-4 py-4
	}
}
</style>
