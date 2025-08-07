import { api } from '../../axios'
import type { TGetPopularPproductsResponse } from './types'

export async function getPopularPproducts() {
  const response = await api.get<TGetPopularPproductsResponse>(
    'metrics/popular-products',
  )

  return response.data
}
