import { api } from '../../axios'
import type { ICancelOrderParams } from './types'

export async function cancelOrders({ orderId }: ICancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
