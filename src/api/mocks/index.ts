import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagedEstablishmentMock } from './get-managed-establishment-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerEstablishmentMock } from './register-establishment-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getManagedEstablishmentMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getOrderDetailsMock,
  getOrdersMock,
  getPopularProductsMock,
  getProfileMock,
  registerEstablishmentMock,
  signInMock,
  updateProfileMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
