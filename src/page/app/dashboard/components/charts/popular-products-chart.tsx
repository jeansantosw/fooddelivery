import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getPopularPproducts } from '@/api/http/services/order-metrics-dashboard-graphic/get-popular-products'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
  colors.pink[500],
  colors.yellow[500],
]

export function PopularPoductsChart() {
  const { data: getPopularPproductsFn } = useQuery({
    queryKey: ['metrics', 'pupular-products'],
    queryFn: getPopularPproducts
  })

  return (
    <Card className="col-span-3">
      <CardHeader className="pb8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium tracking-tight">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        {getPopularPproductsFn && (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={getPopularPproductsFn}
                dataKey="amount"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={96}
                innerRadius={70}
                strokeWidth={3}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle = 0,
                  innerRadius,
                  outerRadius,
                  value,
                  index = 0,
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {getPopularPproductsFn[index].product.length > 12
                        ? getPopularPproductsFn[index].product.substring(0, 12).concat('...')
                        : getPopularPproductsFn[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
              >
                {getPopularPproductsFn.map((_, index) => {
                  return (
                    <Cell
                      key={`Cell ${index}`}
                      fill={COLORS[index]}
                      className="stroke-card hover:opacity-80"
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
