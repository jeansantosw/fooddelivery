export interface IGetProfileResponse {
  phone: string | null
  email: string
  id: string
  name: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}
