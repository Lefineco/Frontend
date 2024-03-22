import type { SupabaseRooms } from '~/pages/index.vue'

interface State {
	rooms: SupabaseRooms
	// lefiners: SupabaseLefiner
	// genres: Genres[]
	// movies: Movie[]
}

export const useGeneralStore = defineStore('general', {
	state: (): State => ({
		rooms: [],
	}),
})
