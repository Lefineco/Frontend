import { youtube } from 'scrape-youtube'
import { tmbd } from '~/server/utils/tmbd'

export default defineEventHandler(async () => {
    let data

	try {
        data = await tmbd().fetch('/genre/movie/list', {
            params: {
                language: 'en-EN',
            },
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        })
	}
	catch (error) {
		return createError('An error occurred while searching for genres!')
	}

	return {
		statusCode: 200,
		data: data.genres,
	}
})
