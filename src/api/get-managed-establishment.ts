import { api } from '@/lib/axios'

export interface GetManagedEstablishmentResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedEstablishment(): Promise<GetManagedEstablishmentResponse> {
  const response = await api.get<GetManagedEstablishmentResponse>(
    '/managed-restaurant',
  )

  return response.data
}
