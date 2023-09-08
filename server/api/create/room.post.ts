import { z } from 'zod'
import { serverSupabaseClient } from '#supabase/server'

const CreateRoomBodySchema = z.object({
  thumbnail: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  video_url: z.string().url(),
  participants: z.array(z.string()).min(1),
})

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const body = await readBody(event)

  try {
    const validatedBody = CreateRoomBodySchema.parse(body)

    console.log(validatedBody)

    const { data, error } = await supabase.from('rooms').upsert({ validatedBody }).select()

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
