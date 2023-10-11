import type { Database } from '~/server/types/supabase'
import { toast } from '@/composables/helper/toast'

type FollowCallback = (isFollow: boolean) => void

export async function useFollow(following_id: string, callback?: FollowCallback) {
  const supabase = useSupabaseClient<Database>()
  const user = useSupabaseUser()

  if (!user.value?.id)
    return toast('Error!', 'You must login to follow Lefiner!', 'error')

  const { error } = await supabase
    .from('follows')
    .insert({ follower_id: user.value?.id, following_id })
    .select()
    .single()

  if (error)
    toast('Error!', error.message, 'error')

  callback && callback(true)
}

export async function useUnfollow(following_id: string, callback?: FollowCallback) {
  const supabase = useSupabaseClient<Database>()
  const user = useSupabaseUser()

  if (!user.value?.id)
    return toast('Error!', 'You must login to follow Lefiner!', 'error')

  const { error } = await supabase
    .from('follows')
    .delete()
    .match({ follower_id: user.value?.id, following_id })

  if (error)
    toast('Error', error.message, 'error')

  callback && callback(false)
}
