import { Percent } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthlyCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Total de cancelamentos no mês
        </CardTitle>
        <Percent className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">75</span>
        <p className="to-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">-7% </span>
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
