export interface IGetManagedCommercialStoreResponse {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export interface IUpdateCommercialStoreProfileBody {
  name: string
  description: string | null
}
