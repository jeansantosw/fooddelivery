import z from 'zod'

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

export const orderTableFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

export type TOrderTableFilters = z.infer<typeof orderTableFiltersSchema>

export interface IOrderDetails {
  orderId: string
}
