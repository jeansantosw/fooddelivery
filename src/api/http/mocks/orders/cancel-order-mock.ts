import { http, HttpResponse } from 'msw'

import type { ICancelOrderParams } from '../../services/orders/types'

export const cancelOrderMock = http.patch<ICancelOrderParams, never, never>(
  '/orders/:orderId/cancel',
  async ({ params }) => {
    if (params.orderId === 'error-orderid') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
