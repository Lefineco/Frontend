import type { Database } from './supabase'

export type TableRows<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']

type ArrayOfObjects = Array<{ [key: string]: any }>

export type MergeObjects<T extends ArrayOfObjects> = {
  [K in keyof T[number]]: T[number][K];
}

export enum Platform {
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
}
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

export interface Participants extends TableRows<'participants'> {
  users: TableRows<'users'>
}

export interface Room extends TableRows<'rooms'> {
  participants: Participants[]
}

export interface Lefiners extends TableRows<'users'> {
  follows: TableRows<'follows'>[]
}
