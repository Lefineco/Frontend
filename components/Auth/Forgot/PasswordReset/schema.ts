import z from 'zod'

export const forgotPasswordSchema = z.object({
  password: z.string(),
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>
