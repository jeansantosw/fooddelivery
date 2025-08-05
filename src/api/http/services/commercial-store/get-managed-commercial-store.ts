import { api } from '../../axios'
import type { IGetManagedCommercialStoreResponse } from './types'

export async function getManagedCommercialStore() {
  const response = await api.get<IGetManagedCommercialStoreResponse>(
    '/managed-restaurant',
  )

  return response.data
}
