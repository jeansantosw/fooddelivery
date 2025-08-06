import { api } from '../../axios'
import type { IGetMonthOrdersAmountResponse } from './types'

export async function getMonthOrdersAmount() {
  const response = await api.get<IGetMonthOrdersAmountResponse>(
    'metrics/month-orders-amount',
  )

  return response.data
}
