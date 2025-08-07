import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SignIn } from "./sign-in"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/api/http/react-query"

describe('🔥 SignIn', () => {
  it('sshould set default email if URL parameters contain email', () => {
    const { getByLabelText } = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/sign-in?email=exemplo@exemplo.com']}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        )
      }
    })

    const emailLabel = getByLabelText('Digite seu e-mail') as HTMLInputElement

    expect(emailLabel.value).toEqual('exemplo@exemplo.com')

  })
})