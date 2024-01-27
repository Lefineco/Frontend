<script lang="ts" setup>
import { toast } from '~/composables/helper/toast'

import type { Database } from '~/server/types/supabase'
import { useChatStore, useMessageHistory } from '~/store/chat'

interface Props {
	roomId: string
}

export interface Chat {
	message: string
	created_at: string
	avatar_url: any
	user_id: string
	loading: boolean
}

export type GroupedMessages = [string, Chat[]]

const props = defineProps<Props>()
const supabase = useSupabaseClient<Database>()
const user = useSupabaseUser()
const chatStore = useChatStore()

const chatMessages = useMessageHistory()
const EMPTY_STRING_REGEXP = /^[\s\uFEFF\xA0]+$/
const chat = ref<HTMLDivElement | null>(null)

function groupMessages(messages: Chat[]): GroupedMessages[] {
	if (!messages)
		return []

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

const roomChannel = supabase.channel(props.roomId)

roomChannel.on('broadcast', {
	event: 'chat',
}, (res) => {
	chatMessages.chatHistory = [...(chatMessages.chatHistory || []), res.payload] as Chat[]

	if (res.event === 'chat' && res.payload.user_id !== user.value?.id)
		chatStore.newMessage++
}).subscribe()

async function sendMessage(message: string) {
	if (EMPTY_STRING_REGEXP.test(message) || message.length < 1)
		return false

	if (!user.value) {
		// eslint-disable-next-line no-console
		return console.log(
			'You must be logged in to send a message',
			'Please login and try again',
			'error',
		)
	}

	if (message.length > 500) {
		// eslint-disable-next-line no-console
		return console.log(
			'Your message is too long',
			'Please shorten your message and try again',
			'error',
		)
	}

	const payload = {
		message,
		created_at: new Date().toISOString(),
		avatar_url: user.value.user_metadata.avatar_url,
		user_id: user.value.id,
		loading: true,
	}

	chatMessages.chatHistory = [...(chatMessages.chatHistory || []), payload]

	const serverResponse = await roomChannel.send({
		type: 'broadcast',
		event: 'chat',
		self: true,
		payload,
	})

	chatMessages.chatHistory = chatMessages.chatHistory?.map((item) => {
		if (item.loading)
			item.loading = false

		return item
	})

	if (serverResponse === 'error')
		toast('Message failed to send', 'Please try again', 'error')
}

onMounted(() => {
	if (chatMessages.roomId !== props.roomId) {
		chatMessages.roomId = props.roomId
		chatMessages.chatHistory = []
	}
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
					v-for="messagesGroup in groupMessages(chatMessages.chatHistory || [])" :key="messagesGroup[0]"
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
		@apply w-full h-full overflow-y-scroll px-4 flex flex-col gap-4 py-4;

		.loadMore {
			@apply relative left-1/2 -translate-x-1/2 z-10 rounded-full;
		}
	}
}
</style>
