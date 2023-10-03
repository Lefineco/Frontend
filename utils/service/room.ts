const supabase = useSupabaseClient()
// FIXME: supabase type definitions are missing
export async function joinRoom(roomId: string, uuid: string, isOwner: boolean) {
  const { data, error } = await supabase
    .from('participants')
    .insert({ user_id: uuid, room_id: roomId, is_owner: isOwner } as any)
    .select()
    .single()

  if (error)
    console.error('Error joining room:', error)
  else console.log('Joined room successfully:', data)
}
