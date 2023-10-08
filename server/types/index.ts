import type { Database } from './supabase'

export type TableRows<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']

export enum Platform {
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
}
export interface VideoPreviewContent {
  image: string | undefined
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

export interface Participants extends TableRows<'participants'> {
  users: TableRows<'users'>
}

export interface Room extends TableRows<'rooms'> {
  participants: Participants[]
}
