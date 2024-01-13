import type { Maybe } from '@0fatihyildiz/fast-ts-utilities'
import type { VerticalNavigationLink } from '#ui/types'
import { VIMEO_REGEXP, YOUTUBE_REGEXP } from '~/constants/regexp'

function checkVideoPlatform(url: string): boolean {
	return YOUTUBE_REGEXP.test(url) || VIMEO_REGEXP.test(url)
}

function getVideoID(url: Maybe<string>): string | null {
	if (!url)
		return null

	const youtubeMatch = url.match(YOUTUBE_REGEXP)
	if (youtubeMatch)
		return youtubeMatch[1]

	const vimeoMatch = url.match(VIMEO_REGEXP)
	if (vimeoMatch)
		return vimeoMatch[1]

	return null
}

type Links = Omit<VerticalNavigationLink, 'icon'> & { icon?: string[] }

function navigationLinks(links: Links[]): Omit<VerticalNavigationLink, 'icon'>[] {
	const route = useRoute()

	return computed(() => {
		return links.map((link) => {
			if (!link.icon)
				return link

			const isActive = link.to === route.path
			return {
				...link,
				isActive,
				icon: link.icon[isActive ? 1 : 0],
			}
		})
	}).value
}

export { checkVideoPlatform, navigationLinks, getVideoID }
