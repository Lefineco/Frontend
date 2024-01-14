<script setup lang="ts">
import { messageTransition } from '~/composables/transitions/chat'
import { useChatStore } from '~/store/chat'

interface Props {
	chatInstance: HTMLDivElement
}
const props = defineProps<Props>()

const { y } = useScroll(props.chatInstance)
const chatStore = useChatStore()
const isClickedHandleBottom = ref(false)

function handleBottom() {
	props.chatInstance?.scrollTo({
		top: props.chatInstance.scrollHeight,
		behavior: 'smooth',
	})

	isClickedHandleBottom.value = true

	setTimeout(() => {
		isClickedHandleBottom.value = false
	}, 1000)
}

const isScrolledToBottom = computed(() => {
	const { scrollHeight, clientHeight } = props.chatInstance || {}
	const isScrolledToBottom = scrollHeight - clientHeight >= y.value + 500

	if (!scrollHeight || !clientHeight)
		return true

	if (y.value === scrollHeight - clientHeight)
		chatStore.newMessage = 0

	return isScrolledToBottom
})

const newMessage = computed(() => {
	const { newMessage } = chatStore

	const newMessageCount = newMessage > 9 ? '9+' : newMessage

	if (newMessage)
		return `${newMessageCount} New messages`
})

onMounted(handleBottom)
</script>

<template>
	<transition :css="false" @enter="messageTransition.enter" @leave="messageTransition.leave">
		<template v-if="isScrolledToBottom && !isClickedHandleBottom">
			<UButton
				v-if="newMessage" :label="newMessage" variant="primary" color="primary" size="xs" class="action new-message"
				trailing-icon="i-ph-arrow-down-bold" @click="handleBottom"
			/>

			<UButton
				v-else icon="i-ph-arrow-down-bold" variant="soft" color="white" size="md" class="action to-bottom"
				@click="handleBottom"
			/>
		</template>
	</transition>
</template>

<style lang="postcss" scoped>
.action {
	@apply absolute backdrop-blur-sm bottom-20;

	&.to-bottom {
		@apply right-8;
	}

	&.new-message {
		@apply right-[calc(50%-65px)] animate-bounce shadow-xl shadow-primary/10;
	}
}
</style>
