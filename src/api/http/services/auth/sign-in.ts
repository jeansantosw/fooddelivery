import { api } from '../../axios'
import type { ISignInBoby } from './types'

export async function signIn({ email }: ISignInBoby): Promise<void> {
  await api.post('/authenticate', { email })
}
