import { http, HttpResponse } from 'msw'

import type { IGetMonthRevenueResponse } from '../../services/order-metrics-dashboard-cards/types'

export const getMonthRevenueMock = http.get<
  never,
  never,
  IGetMonthRevenueResponse
>('metrics/month-receipt', () => {
  return HttpResponse.json({ receipt: 5000, diffFromLastMonth: 6 })
})
