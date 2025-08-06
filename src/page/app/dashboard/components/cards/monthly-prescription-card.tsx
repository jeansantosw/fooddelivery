import { EuroIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getMonthRevenue } from '@/api/http/services/order-metrics-dashboard/get-month-revenue'
import { useQuery } from '@tanstack/react-query'

export function MonthlyPrescriptionCard() {
  const { data: getMonthRevenueFn } = useQuery({
    queryKey: ['metrics', 'monthy-revenue'],
    queryFn: getMonthRevenue
  })

  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Receita total do mês
        </CardTitle>
        <EuroIcon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthRevenueFn && (
          <>
            <span className="text-2xl font-bold tracking-tight">{(getMonthRevenueFn.receipt / 100).toLocaleString('pt-PT', {
              style: 'currency',
              currency: 'EUR'
            })}</span>
            {getMonthRevenueFn.diffFromLastMonth >= 0 ? (
              <p className="to-muted-foreground text-xs">
                <span className="text-shadow-emerald-700 dark:text-emerald-600">{getMonthRevenueFn.diffFromLastMonth}% </span>
                em relação ao dia anterior
              </p>
            ) : (
              <p className="to-muted-foreground text-xs">
                <span className="text-red-500 dark:text-red-400">{getMonthRevenueFn.diffFromLastMonth}% </span>
                em relação ao dia anterior
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
