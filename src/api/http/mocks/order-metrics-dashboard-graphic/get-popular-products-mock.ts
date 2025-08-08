import { http, HttpResponse } from 'msw'

import type { TGetPopularPproductsResponse } from '../../services/order-metrics-dashboard-graphic/types'

export const getPopularPorductsMock = http.get<
  never,
  never,
  TGetPopularPproductsResponse
>('metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Hot-Dog 1', amount: 100 },
    { product: 'Hot-Dog 2', amount: 10 },
    { product: 'Hot-Dog 3', amount: 302 },
    { product: 'Hot-Dog 4', amount: 27 },
    { product: 'Hot-Dog 5', amount: 340 },
    { product: 'Hot-Dog 6', amount: 500 },
    { product: 'Hot-Dog 7', amount: 50 },
  ])
})
