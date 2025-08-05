import { api } from '../../axios'
import type { IGetProfileResponse } from './types'

export async function getProfile() {
  const response = await api.get<IGetProfileResponse>('/me')
  return response.data
}
