import { api } from '../../axios'
import type { IDispatchOrderParams } from './types'

export async function dispatchOrders({ orderId }: IDispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
