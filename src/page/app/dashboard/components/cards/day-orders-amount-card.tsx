import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getDayOrdersAmount } from '@/api/http/services/order-metrics-dashboard/get-day-orders-amount'

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount
  })

  if (!dayOrdersAmount) {
    return
  }

  let dailyPercentageOfTotalOrders = null

  if (dayOrdersAmount?.diffFromYesterday > 0) {
    dailyPercentageOfTotalOrders = (
      <p className="to-muted-foreground text-xs">
        <span className="text-shadow-emerald-700 dark:text-emerald-600">+{dayOrdersAmount.diffFromYesterday}% </span>
        em relação ao dia anterior
      </p>)
  }

  if (dayOrdersAmount?.diffFromYesterday === 0) {
    dailyPercentageOfTotalOrders = (
      <p className="to-muted-foreground text-xs">
        <span className="text-yellow-500 dark:text-yellow-400">{dayOrdersAmount.diffFromYesterday}% </span>
        em relação ao dia anterior
      </p>)
  }

  if (dayOrdersAmount?.diffFromYesterday < 0) {
    dailyPercentageOfTotalOrders = (
      <p className="to-muted-foreground text-xs">
        <span className="text-red-500 dark:text-red-400">-{dayOrdersAmount.diffFromYesterday}% </span>
        em relação ao dia anterior
      </p>)
  }

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Total de pedidos no dia
        </CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">{dayOrdersAmount.amount.toLocaleString('pt-PT')}</span>
            {dailyPercentageOfTotalOrders}
          </>
        )}
      </CardContent>
    </Card>
  )
}
