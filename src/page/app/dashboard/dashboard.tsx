import { DayOrdersAmountCard } from './components/day-orders-amount-card'
import { MonthlyCanceledOrdersAmountCard } from './components/monthly-canceled-orders-amount-card'
import { MonthlyOrdersAmountCard } from './components/monthly-orders-amount-card'
import { MonthlyPrescriptionCard } from './components/monthly-prescription-card'

export function Dasboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <MonthlyPrescriptionCard />
        <MonthlyOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthlyCanceledOrdersAmountCard />
      </div>
    </div>
  )
}
