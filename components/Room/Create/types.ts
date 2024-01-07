import type { VideoPreviewContent } from '~/server/types'

export interface PreviewData {
  data: VideoPreviewContent | null
  error: string | undefined
}
