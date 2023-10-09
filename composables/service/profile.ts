import type { Database } from '~/server/types/supabase'
import { toast } from '@/composables/helper/toast'

export async function useFollow(following_id: string) {
  const supabase = useSupabaseClient<Database>()
  const user = useSupabaseUser()

  if (!user.value?.id)
    return toast('Error!', 'You must login to join room!', 'error')

  const { error } = await supabase
    .from('follows')
    .insert({ follower_id: user.value?.id, following_id })
    .select()
    .single()

  if (error)
    toast(error.message, error.message, 'error')
  else
    toast('Successfully!', 'Joined room successfully!', 'success')
}

export async function useUnfollow(following_id: string) {
  const supabase = useSupabaseClient<Database>()
  const user = useSupabaseUser()

  if (!user.value?.id)
    return toast('Error!', 'You must login to join room!', 'error')

  const { error } = await supabase
    .from('follows')
    .delete()
    .match({ follower_id: user.value?.id, following_id })

  if (error)
    toast(error.message, error.message, 'error')
  else
    toast('Successfully!', 'Joined room successfully!', 'success')
}
