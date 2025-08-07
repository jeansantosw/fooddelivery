import { type IOrderStatus, orderStatusMap } from '../types'

export function OrderStatus({ status }: IOrderStatus) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-zinc-500" />
      )}
      {status === 'processing' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-amber-400" />
      )}
      {status === 'delivering' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-blue-500" />
      )}
      {status === 'delivered' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-green-800" />
      )}
      {status === 'canceled' && (
        <span data-testid="badge" className="h-2 w-2 rounded-full bg-red-800" />
      )}
      <span className="text-muted-foreground font-medium">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
