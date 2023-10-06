import { z } from 'zod'
import { Platform } from '../types'

const roomSchema = z.object({
  thumbnail: z
    .string()
    .min(1, { message: 'Thumbnail en az 1 karakter olmalıdır.' })
    .nonempty({ message: 'Thumbnail alanı gereklidir.' }),
  title: z
    .string()
    .min(1, { message: 'Name en az 1 karakter olmalıdır.' })
    .nonempty({ message: 'Name alanı gereklidir.' }),
  description: z
    .string()
    .min(1, { message: 'Description en az 1 karakter olmalıdır.' }),
  url: z
    .string()
    .url({ message: 'Geçersiz video URL.' })
    .nonempty({ message: 'Video URL gereklidir.' }),
  platform: z.nativeEnum(Platform),
})

type RoomSchema = z.output<typeof roomSchema>

export { roomSchema }
export type { RoomSchema }
