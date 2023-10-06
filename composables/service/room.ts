import type { Database } from '~/server/types/supabase'
import { toast } from '@/composables/helper/toast'

export async function useJoinRoom(room_id: string, user_id: string, is_owner: boolean) {
  const supabase = useSupabaseClient<Database>()

  const { error } = await supabase
    .from('participants')
    .insert({ user_id, room_id, is_owner })
    .select()
    .single()

  if (error)
    toast(error.message, error.message, 'error')
  else
    toast('Successfully!', 'Joined room successfully!', 'success')
}
