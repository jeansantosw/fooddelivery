import { http, HttpResponse } from 'msw'
import type { TGetPopularPproductsResponse } from '../../services/order-metrics-dashboard-graphic/types'

export const getPopularPorductsMock = http.get<never, never, TGetPopularPproductsResponse>('metrics/popular-products', () => {

  return HttpResponse.json([
    { product: 'Loja 1', amount: 100 },
    { product: 'Loja 2', amount: 10 },
    { product: 'Loja 3', amount: 302 },
    { product: 'Loja 4', amount: 27 },
    { product: 'Loja 5', amount: 340 },
    { product: 'Loja 6', amount: 500 },
    { product: 'Loja 7', amount: 50 },
  ])
})