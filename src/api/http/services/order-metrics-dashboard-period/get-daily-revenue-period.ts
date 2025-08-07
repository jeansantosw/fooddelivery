import { api } from '../../axios'
import type { IGetDailyRevenuePeriodParams, TGetDailyRevenuePeriodResponse } from './types'

export async function getDailyRevenuePeriod({ from, to}: IGetDailyRevenuePeriodParams) {
  const response = await api.get<TGetDailyRevenuePeriodResponse>(
    'metrics/daily-receipt-in-period', {
      params: {
        from,
        to
      }
    }
  )

  return response.data
}
