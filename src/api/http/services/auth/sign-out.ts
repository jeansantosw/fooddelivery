import { api } from '../../axios'

export async function signOut() {
  await api.post('sign-out')
}
