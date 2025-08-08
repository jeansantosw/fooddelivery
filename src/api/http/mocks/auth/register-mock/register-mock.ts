import type { ICommercialStoreRegistrationBoby } from '@/api/http/services/auth/types'
import { http, HttpResponse } from 'msw'

export const registerMock = http.post<never, ICommercialStoreRegistrationBoby>('restaurants', async ({ request }) => {
  const { restaurantName } = await request.json()

  if (restaurantName === 'Chu Mania') {
    return new HttpResponse(null, {
      status: 201
    })
  }

  return new HttpResponse(null, { status: 400 })
})