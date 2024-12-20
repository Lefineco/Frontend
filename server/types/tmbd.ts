export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genres {
	id: number
	name: string
}

export interface DiscoverAPI {
	statusCode: number
	data: Movie[]
	page: number
	total_pages: number
}

export interface GenresAPI {
    statusCode: number
    data: Genres[]
}