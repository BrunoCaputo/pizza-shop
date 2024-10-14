import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      receipt: 2000,
      date: '12/10/2024',
    },
    {
      receipt: 4000,
      date: '13/10/2024',
    },
    {
      receipt: 600,
      date: '14/10/2024',
    },
    {
      receipt: 1200,
      date: '15/10/2024',
    },
    {
      receipt: 400,
      date: '16/10/2024',
    },
    {
      receipt: 680,
      date: '17/10/2024',
    },
    {
      receipt: 2600,
      date: '18/10/2024',
    },
  ])
})
