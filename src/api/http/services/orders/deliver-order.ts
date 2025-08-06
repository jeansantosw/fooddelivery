import { api } from '../../axios'
import type { IDeliverOrderParams } from './types'

export async function deliverOrders({ orderId }: IDeliverOrderParams) {
  await api.patch(`/orders/${orderId}/deliver`)
}
