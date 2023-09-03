import z from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
  password: z.string().nonempty('This is required').min(8, { message: 'Too short' }),
})

export const registerSchema = z.object({
  email: z.string().nonempty('This is required').email('Invalid email'),
  password: z.string().nonempty('This is required').min(8, 'Must be at least 8 characters'),
  passwordConfirm: z.string().nonempty('This is required').min(8, 'Must be at least 8 characters'),
}).refine(schema => schema.password === schema.passwordConfirm, {
  message: 'Passwords don\'t match',
  path: ['passwordConfirm'],
})

export type RegisterSchema = z.output<typeof registerSchema>
export type LoginSchema = z.output<typeof loginSchema>
