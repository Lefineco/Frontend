import type { VideoPreviewContent } from '~/server/types'

export interface PreviewData {
  data: VideoPreviewContent | null
  pending: boolean
  error: string | undefined
  refresh: () => void
}
