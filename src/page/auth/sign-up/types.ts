import { z } from 'zod'

export const signupFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
})

export type TSignupForm = z.infer<typeof signupFormSchema>
