import z from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
  password: z.string().nonempty('This is required').min(8, { message: 'Too short' }),
})

export type LoginSchema = z.output<typeof loginSchema>
