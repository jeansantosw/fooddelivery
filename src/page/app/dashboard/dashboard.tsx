import { DayOrdersAmountCard } from './components/cards/day-orders-amount-card'
import { MonthlyCanceledOrdersAmountCard } from './components/cards/monthly-canceled-orders-amount-card'
import { MonthlyOrdersAmountCard } from './components/cards/monthly-orders-amount-card'
import { MonthlyPrescriptionCard } from './components/cards/monthly-prescription-card'
import { PopularPoductsChart } from './components/charts/popular-products-chart'
import { RevenueChat } from './components/charts/revenue-chat'

export function Dasboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <MonthlyCanceledOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthlyOrdersAmountCard />
        <MonthlyPrescriptionCard />
      </div>
      <div className="grid grid-cols-9 gap-4">
        <RevenueChat />
        <PopularPoductsChart />
      </div>
    </div>
  )
}
