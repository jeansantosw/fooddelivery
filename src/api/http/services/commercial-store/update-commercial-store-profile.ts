import { api } from '../../axios'
import type { IUpdateCommercialStoreProfileBody } from './types'

export async function updateCommercialStoreProfile({
  name,
  description,
}: IUpdateCommercialStoreProfileBody) {
  await api.put('/profile', { name, description })
}
