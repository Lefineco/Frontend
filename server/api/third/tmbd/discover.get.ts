import type { Movie } from '~/server/types/tmbd'
import { tmbd } from '~/server/utils/tmbd'

export default defineEventHandler(async () => {
	let data

	try {
		data = await tmbd().fetch('/discover/movie', {
			params: {
				include_adult: false,
				language: 'en-EN',
				page: 1,
			},
		})
	}
	catch (error) {
		console.error(error)
		return createError('An error occurred while searching for movie!')
	}

	return {
		statusCode: 200,
		data: data.results,
		page: data.page,
		total_pages: data.total_pages,
	}
})
