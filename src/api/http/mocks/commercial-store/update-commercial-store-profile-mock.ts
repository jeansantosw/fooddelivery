import { http, HttpResponse } from 'msw'

import type { IUpdateCommercialStoreProfileBody } from '../../services/commercial-store/types'

export const updateCommercialStoreProfileMock = http.put<
  never,
  IUpdateCommercialStoreProfileBody
>('profile', async ({ request }) => {
  const { name } = await request.json()

  if (name === 'Commercial') {
    return new HttpResponse(null, {
      status: 204,
    })
  }

  return new HttpResponse(null, { status: 400 })
})
