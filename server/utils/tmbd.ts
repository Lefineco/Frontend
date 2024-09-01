import type { $Fetch } from 'ofetch'
import { ofetch } from 'ofetch'

export function tmbd(): { fetch: $Fetch } {
	const fetch = ofetch.create({
		baseURL: 'https://api.themoviedb.org/3',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${useRuntimeConfig(useEvent()).tmbdToken}`,
		},
	})

	return { fetch }
}
