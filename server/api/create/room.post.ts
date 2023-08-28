import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const body = await readBody(event)

  try {
    const { data, error } = await supabase
      .from('rooms')
      .upsert({ ...body, participants: [body.participants] })
      .select()

    return {
      message: 'Room created Successfully',
      status: 200,
      data,
      error,
    }
  }
  catch (error) {
    return {
      message: 'Error creating room',
      status: 500,
      error,
    }
  }
})
