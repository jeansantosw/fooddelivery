import { http, HttpResponse } from 'msw'

import type {
  IGetOrderDatailsParams,
  IGetOrderDatailsResponse,
} from '../../services/orders/types'

export const getOrderDetailsMock = http.get<
  IGetOrderDatailsParams,
  never,
  IGetOrderDatailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Exemplo',
      email: 'exemplo@example.com',
      phone: '2382893',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 509,
    orderItems: [
      {
        id: 'order-1',
        priceInCents: 100,
        product: {
          name: 'Hot-Dog',
        },
        quantity: 1,
      },
      {
        id: 'order-2',
        priceInCents: 240,
        product: {
          name: 'Camisa Preta',
        },
        quantity: 2,
      },
    ],
  })
})
