import { http, HttpResponse } from 'msw'
import type { IGetMonthOrdersAmountResponse } from '../../services/order-metrics-dashboard-cards/types'

export const getMonthOrdersAmountMock = http.post<never, never, IGetMonthOrdersAmountResponse>('metrics/month-orders-amount', () => {

  return HttpResponse.json({ amount: 15, diffFromLastMonth: -7 })
})