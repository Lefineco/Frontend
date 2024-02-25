import { makeProviders, makeStandardFetcher, targets } from '@movie-web/providers';

export default defineEventHandler(async () => {
    const { url } = getQuery<{ url: string }>(useEvent())
    if (!url)
        return createError('URL is required!')


    return {
        statusCode: 200,
        // data: result
    }
})