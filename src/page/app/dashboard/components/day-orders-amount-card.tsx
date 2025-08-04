import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Total de pedidos no dia
        </CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">30</span>
        <p className="to-muted-foreground text-xs">
          <span className="text-yellow-500 dark:text-yellow-400">-1% </span>
          em relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
