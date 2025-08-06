import { api } from '../../axios'
import type { IGetOrderDatailsParams, IGetOrderDatailsResponse } from './types'

export async function getOrderDetails({ orderId }: IGetOrderDatailsParams) {
  const responde = await api.get<IGetOrderDatailsResponse>(`/orders/${orderId}`)

  return responde.data
}
