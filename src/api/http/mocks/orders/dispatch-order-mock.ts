import { http, HttpResponse } from 'msw'

import type { IDispatchOrderParams } from '../../services/orders/types'

export const dispatchOrderMock = http.patch<IDispatchOrderParams, never, never>(
  '/orders/:orderId/dispatch',
  async ({ params }) => {
    if (params.orderId === 'error-orderid') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
