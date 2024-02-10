
interface StatePlayerStore {
    isOwner: boolean;
    isSynced: boolean;
}

export const usePlayerStore = defineStore('player', {
	state: (): StatePlayerStore => ({
        isOwner: false,
        isSynced: false,
	}),
})