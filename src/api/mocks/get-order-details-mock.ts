import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+1 (123) 456-7890',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: '123',
        priceInCents: 1000,
        quantity: 2,
        product: {
          name: 'Pizza 01',
        },
      },
      {
        id: '456',
        priceInCents: 2000,
        quantity: 3,
        product: {
          name: 'Pizza 03',
        },
      },
    ],
    totalInCents: 8000,
  })
})
