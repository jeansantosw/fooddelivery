import { api } from '../../axios'
import type { IGetManagedCommercialStore } from './types'

export async function getManagedCommercialStore() {
  const response = await api.get<IGetManagedCommercialStore>(
    '/managed-restaurant',
  )

  return response.data
}
