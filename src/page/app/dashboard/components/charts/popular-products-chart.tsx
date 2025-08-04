import { BarChart } from 'lucide-react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  {
    date: '09/07',
    revenue: 400,
  },
  {
    date: '10/07',
    revenue: 210,
  },
  {
    date: '11/07',
    revenue: 590,
  },
  {
    date: '07/07',
    revenue: 2000,
  },
  {
    date: '13/07',
    revenue: 211,
  },
  {
    date: '14/07',
    revenue: 1500,
  },
  {
    date: '16/07',
    revenue: 1100,
  },
]

export function PopularPoductsChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="pb8 flex-row items-center justify-between">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium tracking-tight">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
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
              dataKey="revenue"
              stroke={colors.orange['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
