import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from '@testing-library/user-event'


const onPageChange = vi.fn()

describe('🔥 Pagination', () => {
  beforeEach(() => {
    onPageChange.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const { getByText } = render(
      <Pagination
        pageIndex={0}
        totalCount={100}
        totalPerPage={10}
        onPageChange={onPageChange} />)

    expect(getByText('Página 1 de 10')).toBeInTheDocument()
    expect(getByText('Total de 100 iten(s)')).toBeInTheDocument()
  })

  it('should be possible to navigate to the next page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={0}
        totalCount={100}
        totalPerPage={10}
        onPageChange={onPageChange} />)

    const clickdOnTheNextPageButton = getByRole('button', {
      name: 'Próxima página'
    })

    await user.click(clickdOnTheNextPageButton)
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('should be possible to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={2}
        totalCount={100}
        totalPerPage={10}
        onPageChange={onPageChange} />)

    const clickdOnThePreviousPageButton = getByRole('button', {
      name: 'Página anterior'
    })


    await user.click(clickdOnThePreviousPageButton)
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('should be possible to navigate to the first page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={7}
        totalCount={100}
        totalPerPage={10}
        onPageChange={onPageChange} />)

    const clickedOnTheFirstPageButton = getByRole('button', {
      name: 'Primeira página'
    })


    await user.click(clickedOnTheFirstPageButton)
    expect(onPageChange).toHaveBeenCalledWith(0)
  })

  it('should be possible to navigate to the last page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={7}
        totalCount={100}
        totalPerPage={10}
        onPageChange={onPageChange} />)

    const clickedOnTheLastPageButton = getByRole('button', {
      name: 'Última página'
    })


    await user.click(clickedOnTheLastPageButton)
    expect(onPageChange).toHaveBeenCalledWith(9)
  })
})