import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getDailyRevenuePeriod } from '@/api/http/services/order-metrics-dashboard-period/get-daily-revenue-period'
import { Label } from '@/components/ui/label'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { subDays } from 'date-fns'
import { Loader2 } from 'lucide-react'

export function RevenueChat() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date()
  })
  const { data: getDailyRevenuePeriodFn } = useQuery({
    queryKey: ['metrics', 'daily-revenue-period', dateRange],
    queryFn: () => getDailyRevenuePeriod({
      from: dateRange?.from,
      to: dateRange?.to
    })
  })

  const chartData = useMemo(() => {
    return getDailyRevenuePeriodFn?.map((item) => {
      return {
        date: item.date,
        receipt: item.receipt / 100
      }
    })
  }, [getDailyRevenuePeriodFn])

  return (
    <Card className="col-span-6">
      <CardHeader className="pb8 flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium tracking-tight">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
        <div className='flex items-center gap-3'>
          <Label>Período</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {chartData ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <YAxis
                stroke={colors.zinc['500']}
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-PT', {
                    style: 'currency',
                    currency: 'EUR',
                  })
                }
              />

              <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.amber['600']}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className='flex h-2xs w-full items-center justify-center'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
