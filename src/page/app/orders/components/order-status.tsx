import { ClockPlus, CookingPot, Soup, Truck } from 'lucide-react'

import { type IOrderStatus, orderStatusMap } from '../types'

export function OrderStatus({ status }: IOrderStatus) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && <ClockPlus className="h-4 w-4 text-zinc-500" />}
      {status === 'processing' && (
        <CookingPot className="h-4 w-4 text-amber-400" />
      )}
      {status === 'delivering' && <Truck className="h-4 w-4 text-blue-500" />}
      {status === 'delivered' && <Soup className="h-4 w-4 text-green-800" />}
      {status === 'canceled' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-red-800" />
      )}
      <span className="text-muted-foreground font-medium">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
