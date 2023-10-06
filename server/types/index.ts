export interface VideoPreviewContent {
  platform: string | undefined
  title: string | undefined
  description: string | undefined
  thumbnail: string | undefined
  url: string | undefined
}

export interface CreateRoomBody {
  thumbnail: string
  name: string
  description: string
  video_url: string
  participants: string[]
}

export enum Platform {
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
}
