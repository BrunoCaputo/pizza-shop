import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { registerEstablishmentMock } from './register-establishment-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock, registerEstablishmentMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
