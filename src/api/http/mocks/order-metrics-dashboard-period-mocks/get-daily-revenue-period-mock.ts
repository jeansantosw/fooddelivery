import { http, HttpResponse } from 'msw'
import type { TGetDailyRevenuePeriodResponse } from '../../services/order-metrics-dashboard-period/types'

export const getDailyRevenuePeriodMock = http.get<never, never, TGetDailyRevenuePeriodResponse>('metrics/daily-receipt-in-period', () => {

  return HttpResponse.json([
    { date: '01/05/2024', receipt: 1000 },
    { date: '02/05/2024', receipt: 100 },
    { date: '03/05/2024', receipt: 300 },
    { date: '04/05/2024', receipt: 20 },
    { date: '05/05/2024', receipt: 1200 },
    { date: '06/05/2024', receipt: 4500 },
    { date: '07/05/2024', receipt: 50 },
  ])
})