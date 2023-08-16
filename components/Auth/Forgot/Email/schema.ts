import z from 'zod'

export const forgotPasswordEmailSchema = z.object({
  email: z.string().email('Invalid email'),
})

export type ForgotPasswordEmailSchema = z.output<typeof forgotPasswordEmailSchema>
