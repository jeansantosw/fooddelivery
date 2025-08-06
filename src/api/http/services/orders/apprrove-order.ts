import { api } from '../../axios'
import type { IApproveOrderParams } from './types'

export async function approveOrders({ orderId }: IApproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
