import { z } from 'zod'
import { Platform } from '../types'

const roomSchema = z.object({
  thumbnail: z
    .string()
    .min(1, { message: 'Thumbnail en az 1 karakter olmalıdır.' }),

  title: z
    .string()
    .min(1, { message: 'Name en az 1 karakter olmalıdır.' }),

  description: z
    .string()
    .min(1, { message: 'Description en az 1 karakter olmalıdır.' }),
  url: z
    .string()
    .url({ message: 'Geçersiz video URL.' }),

  platform: z.nativeEnum(Platform),
})

type RoomSchema = z.output<typeof roomSchema>

export { roomSchema }
export type { RoomSchema }
