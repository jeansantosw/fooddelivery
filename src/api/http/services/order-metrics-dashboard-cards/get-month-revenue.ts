import { api } from '../../axios'
import type { IGetMonthRevenueResponse } from './types'

export async function getMonthRevenue() {
  const response = await api.get<IGetMonthRevenueResponse>(
    'metrics/month-receipt',
  )

  return response.data
}
