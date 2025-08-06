import { api } from '../../axios'
import type { IGetDayOrdersAmountResponse } from './types'

export async function getDayOrdersAmount() {
  const response = await api.get<IGetDayOrdersAmountResponse>(
    'metrics/day-orders-amount',
  )

  return response.data
}
