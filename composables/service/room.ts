// FIXME: supabase type definitions are missing
export async function useJoinRoom(room_id: string, user_id: string, is_owner: boolean) {
  const supabase = useSupabaseClient()
  const toast = useToast()

  const { error } = await supabase
    .from('participants')
    .insert({ user_id, room_id, is_owner } as any)
    .select()
    .single()

  if (error) {
    toast.add({
      id: 'error',
      title: error,
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
