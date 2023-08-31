export interface VideoPreviewContent {
  type: string | undefined
  title: string | undefined
  description: string | undefined
  image: string | undefined
  video: string | undefined
}

export enum Platform {
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
}
