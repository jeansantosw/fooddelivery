export type TOrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface IOrderStatus {
  status: TOrderStatus
}

export const orderStatusMap: Record<TOrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Preparando pedido',
  delivered: 'Entregue',
  delivering: 'Em entrega',
}

export interface IOrderTableRow {
  order: {
    orderId: string
    createdAt: string
    status: TOrderStatus
    customerName: string
    total: number
  }
}
