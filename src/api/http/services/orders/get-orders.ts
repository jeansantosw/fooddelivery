import { api } from '../../axios'
import type { IGetOrderParams, IGetOrdersResponse } from './types'

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: IGetOrderParams) {
  const response = await api.get<IGetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data
}
