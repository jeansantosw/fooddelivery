import { http, HttpResponse } from 'msw'

import type { IDeliverOrderParams } from '../../services/orders/types'

export const deliverOrderMock = http.patch<IDeliverOrderParams, never, never>(
  '/orders/:orderId/deliver',
  async ({ params }) => {
    if (params.orderId === 'error-orderid') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
