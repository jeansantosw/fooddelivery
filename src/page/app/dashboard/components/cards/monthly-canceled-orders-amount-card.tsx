import { Percent } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getMonthCanceledOrdersAmount } from '@/api/http/services/order-metrics-dashboard-cards/get-month-canceled-orders-amount'
import { useQuery } from '@tanstack/react-query'
import { CardSkeleton } from './cards-skeleton/cards-skeleton'

export function MonthlyCanceledOrdersAmountCard() {
  const { data: getMonthCanceledOrdersAmountFn } = useQuery({
    queryKey: ['metrics', 'monthy-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount
  })

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Total de cancelamentos no mês
        </CardTitle>
        <Percent className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthCanceledOrdersAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">{getMonthCanceledOrdersAmountFn.amount.toLocaleString('pt-PT')}</span>
            {getMonthCanceledOrdersAmountFn.diffFromLastMonth <= 0 ? (
              <p className="to-muted-foreground text-xs">
                <span className="text-shadow-emerald-700 dark:text-emerald-600">{getMonthCanceledOrdersAmountFn.diffFromLastMonth}% </span>
                em relação ao dia anterior
              </p>
            ) : (
              <p className="to-muted-foreground text-xs">
                <span className="text-red-500 dark:text-red-400">+{getMonthCanceledOrdersAmountFn.diffFromLastMonth}% </span>
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
