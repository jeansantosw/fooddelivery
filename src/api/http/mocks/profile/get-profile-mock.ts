import { http, HttpResponse } from 'msw'

import type { IGetProfileResponse } from '../../services/profile/types'

export const getProfileMock = http.get<never, never, IGetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'id-profile',
      name: 'exemplo',
      email: 'exemplo@exemplo.com',
      phone: '232323432',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
