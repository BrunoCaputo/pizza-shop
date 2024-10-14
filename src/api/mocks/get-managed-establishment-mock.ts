import { http, HttpResponse } from 'msw'

import { GetManagedEstablishmentResponse } from '../get-managed-establishment'

export const getManagedEstablishmentMock = http.get<
  never,
  never,
  GetManagedEstablishmentResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-establishment-id',
    name: 'Pizza Shop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
