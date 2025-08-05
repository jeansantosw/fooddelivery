import z from 'zod'

export const commercialStoreProfileDialogSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

export type TCommercialStoreProfileDialog = z.infer<
  typeof commercialStoreProfileDialogSchema
>
