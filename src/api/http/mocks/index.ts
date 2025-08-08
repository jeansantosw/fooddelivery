import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { registerMock } from './auth/register-mock/register-mock'
import { signInMock } from './auth/sign-in-mock.ts/sign-in-mock'
import { getManagedCommercialStoreMock } from './commercial-store/get-managed-commercial-store-mock'
import { updateCommercialStoreProfileMock } from './commercial-store/update-commercial-store-profile-mock'
import { getDayOrdersAmountMock } from './order-metrics-dashboard-cards-mocks/get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './order-metrics-dashboard-cards-mocks/get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './order-metrics-dashboard-cards-mocks/get-month-orders-amount-mock'
import { getMonthRevenueMock } from './order-metrics-dashboard-cards-mocks/get-month-revenue-mock'
import { getPopularPorductsMock } from './order-metrics-dashboard-graphic/get-popular-products-mock'
import { getDailyRevenuePeriodMock } from './order-metrics-dashboard-period-mocks/get-daily-revenue-period-mock'
import { getOrderDetailsMock } from './orders/get-orders-details-mock'
import { getOrdersMock } from './orders/get-orders-mock'
import { getProfileMock } from './profile/get-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getPopularPorductsMock,
  getDailyRevenuePeriodMock,
  getProfileMock,
  getManagedCommercialStoreMock,
  updateCommercialStoreProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
