import { http, HttpResponse } from 'msw'

import type { IGetDayOrdersAmountResponse } from '../../services/order-metrics-dashboard-cards/types'

export const getDayOrdersAmountMock = http.get<
  never,
  never,
  IGetDayOrdersAmountResponse
>('metrics/day-orders-amount', () => {
  return HttpResponse.json({ amount: 10, diffFromYesterday: -2 })
})
