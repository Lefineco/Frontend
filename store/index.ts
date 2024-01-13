import type { SupabaseLefiner, SupabaseRooms } from '~/pages/index.vue'

interface State {
	rooms: SupabaseRooms
	lefiners: SupabaseLefiner
}

export const useGeneralStore = defineStore('general', {
	state: (): State => ({
		rooms: [],
		lefiners: [],
	}),
})
