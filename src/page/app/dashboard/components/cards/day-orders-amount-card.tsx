import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getDayOrdersAmount } from '@/api/http/services/order-metrics-dashboard-cards/get-day-orders-amount'
import { CardSkeleton } from './cards-skeleton/cards-skeleton'

export function DayOrdersAmountCard() {
  const { data: getDayOrdersAmountFn } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount
  })

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Total de pedidos no dia
        </CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getDayOrdersAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">{getDayOrdersAmountFn.amount.toLocaleString('pt-PT')}</span>
            {getDayOrdersAmountFn.diffFromYesterday >= 0 ? (
              <p className="to-muted-foreground text-xs">
                <span className="text-shadow-emerald-700 dark:text-emerald-600">+{getDayOrdersAmountFn.diffFromYesterday}% </span>
                em relação ao dia anterior
              </p>
            ) : (
              <p className="to-muted-foreground text-xs">
                <span className="text-red-500 dark:text-red-400">{getDayOrdersAmountFn.diffFromYesterday}% </span>
                em relação ao dia anterior
              </p>
            )}
          </>
        ) : (
          <CardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
