import { z } from 'zod'
import { serverSupabaseClient } from '#supabase/server'

const CreateRoomBodySchema = z.object({
  thumbnail: z
    .string()
    .min(1, { message: 'Thumbnail en az 1 karakter olmalıdır.' }) // Özelleştirilmiş hata mesajı
    .nonempty({ message: 'Thumbnail alanı gereklidir.' }), // Özelleştirilmiş hata mesajı
  name: z
    .string()
    .min(1, { message: 'Name en az 1 karakter olmalıdır.' }) // Özelleştirilmiş hata mesajı
    .nonempty({ message: 'Name alanı gereklidir.' }), // Özelleştirilmiş hata mesajı
  description: z
    .string()
    .min(1, { message: 'Description en az 1 karakter olmalıdır.' }) // Özelleştirilmiş hata mesajı
    .nonempty({ message: 'Description alanı gereklidir.' }), // Özelleştirilmiş hata mesajı
  video_url: z
    .string()
    .url({ message: 'Geçersiz video URL.' }) // Özelleştirilmiş hata mesajı
    .nonempty({ message: 'Video URL gereklidir.' }), // Özelleştirilmiş hata mesajı
  participants: z.array(z.string().min(1)).min(1, { message: 'En az bir katılımcı gerekir.' }), // Özelleştirilmiş hata mesajı
})

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const body = await readBody(event)

  console.log('test');
  
  const validatedBody = CreateRoomBodySchema.
  console.log(typeof validatedBody)

  try {

    const { data, error } = await supabase.from('rooms').upsert({ ...body }).select()

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
      error: (error as any).message,
    }
  }
})
