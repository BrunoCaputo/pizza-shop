import { api } from '@/lib/axios'

export interface RegisterEstablishmentBody {
  establishmentName: string
  managerName: string
  email: string
  phone: string
}

export async function registerEstablishment({
  establishmentName,
  managerName,
  phone,
  email,
}: RegisterEstablishmentBody): Promise<void> {
  await api.post('/restaurants', {
    establishmentName,
    managerName,
    phone,
    email,
  })
}
