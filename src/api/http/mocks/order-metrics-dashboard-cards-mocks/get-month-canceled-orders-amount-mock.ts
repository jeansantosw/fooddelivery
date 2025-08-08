import { http, HttpResponse } from 'msw'
import type { IGetMonthCanceledOrdersAmountResponse } from '../../services/order-metrics-dashboard-cards/types'

export const getMonthCanceledOrdersAmountMock = http.get<never, never, IGetMonthCanceledOrdersAmountResponse>('metrics/month-canceled-orders-amount', () => {

  return HttpResponse.json({ amount: 3, diffFromLastMonth: -6 })
})