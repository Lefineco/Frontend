import type { Database } from '~/server/types/supabase'
import { toast } from '@/composables/helper/toast'

export async function useJoinRoom(
	room_id: string,
	user_id: string | undefined,
	is_owner: boolean,
) {
	const router = useRouter()
	const supabase = useSupabaseClient<Database>()

	if (!user_id)
		return toast('Error!', 'Please login to join room!', 'error')

	if (!room_id)
		return toast('Error!', 'Room id is not valid!', 'error')

	const { error } = await supabase
		.from('participants')
		.insert({ user_id, room_id, is_owner })
		.select()
		.single()

	if (error)
		return toast(error.message, error.message, 'error')

	await router.push(`/rooms/${room_id}`)

	toast('Successfully!', 'Joined room successfully!', 'success')
}

export async function useLeaveRoom(
	room_id: string,
	user_id: string | undefined,
) {
	const supabase = useSupabaseClient<Database>()

	if (!user_id)
		return toast('Error!', 'Please login to leave room!', 'error')

	if (!room_id)
		return toast('Error!', 'Room id is not valid!', 'error')

	const { error } = await supabase
		.from('participants')
		.delete()
		.match({ user_id, room_id })

	if (error)
		return toast(error.message, error.message, 'error')
}
