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
		// lefiners: [],
		// genres: [],
		// movies: []
	}),
	// set all

	actions: {
		setAll({rooms, lefiners, genres, movies}: State) {
			this.rooms = rooms
			// this.lefiners = lefiners
			// this.genres = genres
			// this.movies = movies
		}
	}
})
