import { EuroIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthlyPrescriptionCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">
          Receita total do mês
        </CardTitle>
        <EuroIcon className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">€15.000,00</span>
        <p className="to-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">5% </span>
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
