export interface VideoPreviewContent {
  platform: string | undefined
  title: string | undefined
  description: string | undefined
  thumbnail: string | undefined
  url: string | undefined
}

export enum Platform {
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
}
