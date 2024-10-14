import { http, HttpResponse } from 'msw'

import { RegisterEstablishmentBody } from '../register-establishment'

export const registerEstablishmentMock = http.post<
  never,
  RegisterEstablishmentBody
>('/restaurants', async ({ request }) => {
  const { establishmentName } = await request.json()

  if (establishmentName === 'Pizza Shop') {
    return new HttpResponse(null, {
      status: 201,
    })
  }

  return new HttpResponse(null, { status: 401 })
})
