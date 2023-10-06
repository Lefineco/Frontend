import type { Database } from '~/server/types/supabase'

export async function useJoinRoom(room_id: string, user_id: string, is_owner: boolean) {
  const supabase = useSupabaseClient<Database>()
  const toast = useToast()

  const { error } = await supabase
    .from('participants')
    .insert({ user_id, room_id, is_owner })
    .select()
    .single()

  if (error) {
    toast.add({
      id: 'error',
      title: error.message,
      description: error?.message,
      icon: 'i-ph-warning-fill',
      timeout: 2000,
      color: 'red',
    })
  }
  else {
    toast.add({
      id: 'success',
      title: 'Joined room successfully!',
      icon: 'i-ph-check-circle-fill',
      timeout: 2000,
      color: 'green',
    })
  }
}
