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

function useGetFromAndTo(page: number, ITEMS_PER_PAGE: number) {
	const from = ref(page * ITEMS_PER_PAGE)

	const to = ref(from.value + ITEMS_PER_PAGE)

	if (from.value > 0)
		from.value += 1

	return { from, to }
}


async function useImageIsLoaded(src: string): Promise<boolean> {
	return new Promise((resolve) => {
		const img = document.createElement('img');

		img.onload = () => {
			resolve(true);
		};

		img.onerror = () => {
			resolve(false);
		};

		img.src = src;
	});
}

export { checkVideoPlatform, navigationLinks, getVideoID, useImageIsLoaded, useGetFromAndTo }
