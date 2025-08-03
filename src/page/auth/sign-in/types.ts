import { z } from 'zod'

export const signinFormSchema = z.object({
  email: z.string().email(),
})

export type TSigninForm = z.infer<typeof signinFormSchema>
