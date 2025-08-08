import { http, HttpResponse } from 'msw'

import type { IGetManagedCommercialStoreResponse } from '../../services/commercial-store/types'

export const getManagedCommercialStoreMock = http.get<
  never,
  never,
  IGetManagedCommercialStoreResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'id-restaurant',
    name: 'Commercial name',
    description: 'Description managerd',
    managerId: 'id-manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})
