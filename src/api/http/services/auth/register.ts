import { api } from '../../axios'
import type { ICommercialStoreRegistrationBoby } from './types'

export async function commercialStoreRegistration({
  restaurantName,
  managerName,
  phone,
  email,
}: ICommercialStoreRegistrationBoby) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    phone,
    email,
  })
}
