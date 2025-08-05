import { api } from '../../axios'
import type { IGetOrderParams, IGetOrdersResponse } from './types'

export async function getOrders({ pageIndex }: IGetOrderParams) {
  const response = await api.get<IGetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
