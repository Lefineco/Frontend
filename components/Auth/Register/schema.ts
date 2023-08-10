import z from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  passwordConfirm: z.string().min(8, 'Must be at least 8 characters'),
}).refine(schema => schema.password === schema.passwordConfirm, {
  message: 'Passwords don\'t match',
  path: ['passwordConfirm'],
})

export type Schema = z.output<typeof schema>
