import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { CookingPot, Soup, Truck, X } from 'lucide-react'

import { approveOrders } from '@/api/http/services/orders/approve-order'
import { cancelOrders } from '@/api/http/services/orders/cancel-order'
import { deliverOrders } from '@/api/http/services/orders/deliver-order'
import { dispatchOrders } from '@/api/http/services/orders/dispatch-order'
import type { IGetOrdersResponse } from '@/api/http/services/orders/types'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

import type { IOrderTableRow, TOrderStatus } from '../types'
import { OrderDetails } from './order-datails'
import { OrderStatus } from './order-status'

export function OrderTableRow({ order }: IOrderTableRow) {
  const queryClient = useQueryClient()
  const isDesableIfNotPendingOrProcessing = !['pending', 'processing'].includes(
    order.status,
  )

  function updateOrderStatusCache(orderId: string, status: TOrderStatus) {
    const orderCache = queryClient.getQueriesData<IGetOrdersResponse>({
      queryKey: ['orders'],
    })

    orderCache.forEach(([cacheKey, cacheList]) => {
      if (!cacheList) {
        return
      }

      queryClient.setQueryData<IGetOrdersResponse>(cacheKey, {
        ...cacheList,
        orders: cacheList.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status }
          }
          return order
        }),
      })
    })
  }

  const { mutateAsync: cancelOrdersFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrders,
      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'canceled')
      },
    })

  const { mutateAsync: deliverOrdersFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrders,
      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'delivered')
      },
    })

  const { mutateAsync: approveOrdersFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrders,
      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'processing')
      },
    })

  const { mutateAsync: dispatchOrdersFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrders,
      async onSuccess(_, { orderId }) {
        updateOrderStatusCache(orderId, 'delivering')
      },
    })

  return (
    <TableRow>
      <TableCell>
        <OrderDetails orderId={order.orderId} />
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: pt,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-PT', {
          style: 'currency',
          currency: 'EUR',
        })}
      </TableCell>
      <TableCell>
        {order.status === 'pending' && (
          <Button
            onClick={() => approveOrdersFn({ orderId: order.orderId })}
            disabled={isApprovingOrder}
            variant="outline"
            size="xs"
          >
            <CookingPot className="h-3 w-3" />
            Aprovar
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            onClick={() => dispatchOrdersFn({ orderId: order.orderId })}
            disabled={isDispatchingOrder}
            variant="outline"
            size="xs"
            className="dark:text-muted bg-amber-400 hover:bg-amber-400/80 dark:bg-amber-400 hover:dark:bg-amber-400/80"
          >
            <Truck className="h-3 w-3" />
            Em entrega
          </Button>
        )}
        {order.status === 'delivering' && (
          <Button
            onClick={() => deliverOrdersFn({ orderId: order.orderId })}
            disabled={isDeliveringOrder}
            variant="outline"
            size="xs"
            className="w-30 gap-4 bg-blue-500/80 hover:bg-blue-500/70 dark:bg-blue-500/80 dark:text-white hover:dark:bg-blue-500/50"
          >
            <Soup className="h-3 w-3" />
            Entregue
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          disabled={isDesableIfNotPendingOrProcessing || isCancelingOrder}
          onClick={() => cancelOrdersFn({ orderId: order.orderId })}
          variant="ghost"
          size="xs"
        >
          <X className="h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
