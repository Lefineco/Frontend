import { youtube } from 'scrape-youtube'
import { tmbd } from '~/server/utils/tmbd'

export default defineEventHandler(async () => {
	const { search } = getQuery<{ search: string }>(useEvent())
	if (!search)
		return createError('Search query is required!')

	let result

	try {
		result = await tmbd().fetch('/search/movie', {
			params: {
				query: search,
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
		data: result,
	}
})
