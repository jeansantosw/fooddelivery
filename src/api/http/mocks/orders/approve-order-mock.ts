import { http, HttpResponse } from 'msw'

import type { IApproveOrderParams } from '../../services/orders/types'

export const approveOrderMock = http.patch<IApproveOrderParams, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-orderid') {
      return new HttpResponse(null, { status: 400 })
    }
    return new HttpResponse(null, { status: 204 })
  },
)
