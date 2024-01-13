interface State {
    newMessage: number
}

export const useChatStore = defineStore('chat', {
	state: (): State => ({
        newMessage: 0,
	}),
})
