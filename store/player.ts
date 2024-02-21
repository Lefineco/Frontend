import type { MediaRemoteControl } from 'vidstack'

type PlayerEvents = 'PLAY' | 'PAUSE' | 'SEEK'
export interface BrodcastResponse {
	on_play: boolean
	current_time: number
	type: PlayerEvents
}
interface StatePlayerStore {
	isOwner: boolean
	isSynced: boolean
	isJoined: boolean
	remote: MediaRemoteControl | null
	brodcastResponse: BrodcastResponse | null
	eventType: PlayerEvents | ''
}

export const usePlayerStore = defineStore('player', {
	state: (): StatePlayerStore => ({
		isOwner: false,
		isSynced: false, // TODO: isSynced and isJoined should be in the same state
		isJoined: false, // TODO: "
		remote: null,
		brodcastResponse: null,
		eventType: '',
	}),
	getters: {
		checkState(state) {
			if (state.isOwner)
				return

			return !state.brodcastResponse?.on_play
		},
	},
	actions: {
		setEventType(type: PlayerEvents) {
			this.eventType = type

			setTimeout(() => {
				this.eventType = ''
			}, 1000)
		},
		setJoined() {
			this.isJoined = true
			this.isSynced = true
		},
		handlePlayPause() {
			this.setEventType(this.remote?.getPlayer()?.paused ? 'PAUSE' : 'PLAY')

			if (this.isOwner)
				return

			if (this.brodcastResponse?.on_play)
				this.remote?.seek(this.brodcastResponse.current_time)

			if (!this.brodcastResponse?.on_play)
				return this.remote?.pause()

			this.isSynced = !!this.remote?.getPlayer()?.paused
		},
	},
})
