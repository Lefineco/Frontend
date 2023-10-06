export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      participants: {
        Row: {
          created_at: string
          id: string
          is_owner: boolean
          room_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_owner?: boolean
          room_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_owner?: boolean
          room_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'participants_room_id_fkey'
            columns: ['room_id']
            referencedRelation: 'rooms'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'participants_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      rooms: {
        Row: {
          created_at: string
          description: string | null
          id: string
          platform: string
          thumbnail: string | null
          title: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          platform?: string
          thumbnail?: string | null
          title?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          platform?: string
          thumbnail?: string | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          email: string | null
          id: string
          name: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          id: string
          name?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          id?: string
          name?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
