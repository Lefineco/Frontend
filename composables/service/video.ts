import { checkVideoPlatform } from '@/composables/helper/index'
import type { VideoPreviewContent } from '~/server/types'

export interface PreviewData {
	data: VideoPreviewContent | null
	pending: boolean
	error: string | undefined
	refresh: () => void
}

function useVideo() {
	const url = ref('')
	const deboundedUrl = refDebounced(url, 2000)
	const previewData = ref<PreviewData | null>(null)

	const previewVideo = watch([deboundedUrl], async () => {
		previewData.value = null
		if (checkVideoPlatform(url.value) && (url.value === deboundedUrl.value))
			return null

		const { data, pending, error, refresh } = await useFetch<VideoPreviewContent | null>('/api/scrape/video', {
			method: 'POST',
			body: JSON.stringify({
				url: deboundedUrl.value,
			}),
		})

		previewData.value = {
			data: data.value,
			pending: pending.value,
			error: error.value?.message,
			refresh,
		}
	})

	onUnmounted(previewVideo)

	return { url, deboundedUrl, previewData }
}

export default useVideo
