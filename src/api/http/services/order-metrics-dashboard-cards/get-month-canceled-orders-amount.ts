import { api } from '../../axios'
import type { IGetMonthCanceledOrdersAmountResponse } from './types'

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<IGetMonthCanceledOrdersAmountResponse>(
    'metrics/month-canceled-orders-amount',
  )

  return response.data
}
