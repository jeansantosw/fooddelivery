import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getMonthOrdersAmount } from '@/api/http/services/order-metrics-dashboard/get-month-orders-amount'
import { useQuery } from '@tanstack/react-query'

export function MonthlyOrdersAmountCard() {
  const { data: monthlyOrdersAmount } = useQuery({
    queryKey: ['metrics', 'monthly-orders-amount'],
    queryFn: getMonthOrdersAmount
  })

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Total de pedidos no mês
        </CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">{monthlyOrdersAmount.amount}</span>
            {monthlyOrdersAmount.diffFromLastMonth >= 0 ? (
              <>
                <p className="to-muted-foreground text-xs">
                  <span className="text-shadow-emerald-700 dark:text-emerald-600">+{monthlyOrdersAmount.diffFromLastMonth}% </span>
                  em comparação ao mês anterior
                </p>
              </>
            ) : (
              <>
                <p className="to-muted-foreground text-xs">
                  <span className="text-red-500 dark:text-red-400">{monthlyOrdersAmount.diffFromLastMonth}% </span>
                  em comparação ao mês anterior
                </p>
              </>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
