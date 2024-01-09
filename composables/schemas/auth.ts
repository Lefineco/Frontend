import z from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('This is required').email({ message: 'Must be a valid email' }),
  password: z.string().nonempty('This is required').min(8, { message: 'Too short' }),
})

export const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  passwordConfirm: z.string().min(8, 'Must be at least 8 characters'),
}).refine(schema => schema.password === schema.passwordConfirm, {
  message: 'Passwords don\'t match',
  path: ['passwordConfirm'],
})

export const forgotPasswordEmailSchema = z.object({
  email: z.string().email('Invalid email'),
})

export const forgotPasswordSchema = z.object({
  password: z.string(),
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>
export type RegisterSchema = z.output<typeof registerSchema>
export type LoginSchema = z.output<typeof loginSchema>
export type ForgotPasswordEmailSchema = z.output<typeof forgotPasswordEmailSchema>
