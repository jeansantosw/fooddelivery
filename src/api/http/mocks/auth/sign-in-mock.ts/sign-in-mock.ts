import { http, HttpResponse } from 'msw'
import type { ISignInBoby } from '@/api/http/services/auth/types'

export const signInMock = http.post<never, ISignInBoby>('authenticate', async ({ request }) => {
  const { email } = await request.json()

  if (email === 'exemplo@exemplo.com') {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'auth=sample-jwt',
      }
    })
  }

  return new HttpResponse(null, { status: 401 })
})