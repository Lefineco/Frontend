import { zh } from 'h3-zod'
import { serverSupabaseClient } from '#supabase/server'
import { roomSchema } from '~/server/validation'

export default defineEventHandler(async () => {
	const supabase = await serverSupabaseClient(useEvent())

	const body = await zh.useValidatedBody(useEvent(), roomSchema)

	const { data, error } = await supabase
		.from('rooms')
		.insert(body as any)
		.select().single()

	return {
		message: 'Room created Successfully',
		statusCode: data ? 200 : 400,
		data,
		error,
	}
})
