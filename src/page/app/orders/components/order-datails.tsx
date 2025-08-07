import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { Search } from 'lucide-react'
import { useState } from 'react'

import { getOrderDetails } from '@/api/http/services/orders/get-order-details'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import type { IOrderDetails } from '../types'
import { OrderStatus } from './order-status'
import { OrderDetailsSkeleton } from './order-components-skeleton/order-details-skeleton'

export function OrderDetails({ orderId }: IOrderDetails) {
  const [isDatailsOpen, setIsDatailsOpen] = useState(false)

  const { data: orderDatails } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: isDatailsOpen,
  })
  return (
    <Dialog open={isDatailsOpen} onOpenChange={setIsDatailsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-3">
          <span className="text-primary/80 font-semibold tracking-tight">
            <span className="text-muted-foreground pr-1">
              Numero do pedido:{' '}
            </span>
            {orderId.toLocaleUpperCase()}
          </span>
          <DialogDescription className="text-xs">
            Detalhes do pedido
          </DialogDescription>
        </DialogHeader>
        {orderDatails ? (
          <div className="space-y-6">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Status
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground font-medium">
                        <OrderStatus status={orderDatails.status} />
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Cliente
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {orderDatails.customer.name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Telefone
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {orderDatails.customer.phone ?? 'Sem número'}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    E-mail
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {orderDatails.customer.email}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Realizado há
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {formatDistanceToNow(orderDatails.createdAt, {
                      locale: pt,
                      addSuffix: true,
                    })}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead className="text-right">Quantidade</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderDatails.orderItems.map((item) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{item.product.name}</TableCell>
                      <TableCell className="text-right">
                        {item.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        {(item.priceInCents / 100).toLocaleString('pt-PT', {
                          style: 'currency',
                          currency: 'EUR',
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        {(
                          (item.priceInCents * item.quantity) /
                          100
                        ).toLocaleString('pt-PT', {
                          style: 'currency',
                          currency: 'EUR',
                        })}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total do pedido</TableCell>
                  <TableCell className="text-right font-medium">
                    {(orderDatails.totalInCents / 100).toLocaleString('pt-PT', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        ) : (
          <OrderDetailsSkeleton />
        )}
      </DialogContent>
    </Dialog>
  )
}
