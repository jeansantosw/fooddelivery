import { render } from "@testing-library/react"
import { NavLink } from "./nav-link"
import { MemoryRouter } from "react-router-dom"

describe('🔥 Navigation menu', () => {
  it('should keep the menu name highlighted when the page is selected', () => {
    const { getByText } = render(
      <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/list'>List</NavLink>
      </>, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/list']}>{children}</MemoryRouter>
        )
      }
    })

    expect(getByText('Home').dataset.current).toEqual('false')
    expect(getByText('List').dataset.current).toEqual('true')
  })
})