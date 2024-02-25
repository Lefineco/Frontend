import { youtube } from 'scrape-youtube'

const options = {
	type: 'video',
}

export default defineEventHandler(async () => {
	const { search } = getQuery<{ search: string }>(useEvent())
	if (!search)
		return createError('Search query is required!')

	let result

	try {
		result = await youtube.search(search, options)
	}
	catch (error) {
		return createError('An error occurred while searching for videos!')
	}

	return {
		statusCode: 200,
		data: result,
	}
})
