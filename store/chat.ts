import type { Chat } from "~/components/Room/Chat/index.vue"

interface StateChatStore {
    newMessage: number
}

interface StateMessageHistory {
    roomId: string | null
    chatHistory: Chat[] | null
}

export const useChatStore = defineStore('chat', {
	state: (): StateChatStore => ({
        newMessage: 0,
	}),
})


export const useMessageHistory = defineStore('messageHistory', {
    state: (): StateMessageHistory => ({
        roomId: '',
        chatHistory: null,
    }),
    persist: true,
})