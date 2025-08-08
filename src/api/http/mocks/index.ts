import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { signInMock } from './auth/sign-in-mock.ts/sign-in-mock'
import { registerMock } from './auth/register-mock/register-mock'
import { getDayOrdersAmountMock } from './order-metrics-dashboard-cards-mocks/get-day-orders-amount-mock'
import { getMonthOrdersAmountMock } from './order-metrics-dashboard-cards-mocks/get-month-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './order-metrics-dashboard-cards-mocks/get-month-canceled-orders-amount-mock'
import { getMonthRevenueMock } from './order-metrics-dashboard-cards-mocks/get-month-revenue-mock'
import { getPopularPorductsMock } from './order-metrics-dashboard-graphic/get-popular-products-mock';
import { getDailyRevenuePeriodMock } from './order-metrics-dashboard-period-mocks/get-daily-revenue-period-mock';


export const worker = setupWorker(signInMock, registerMock, getDayOrdersAmountMock, getMonthOrdersAmountMock, getMonthCanceledOrdersAmountMock, getMonthRevenueMock, getPopularPorductsMock, getDailyRevenuePeriodMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}