import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('🔥 Order status', () => {
  it('should show exact text in (pending) order status', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="pending" />)

    expect(getByText('Pendente')).toBeInTheDocument()
    expect(getByTestId('badge')).toHaveClass('bg-zinc-500')
  })

  it('should show exact text in (processing) order status', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="processing" />,
    )

    expect(getByText('Preparando pedido')).toBeInTheDocument()
    expect(getByTestId('badge')).toHaveClass('bg-amber-400')
  })

  it('should show exact text in (delivering) ordeer status', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivering" />,
    )

    expect(getByText('Em entrega')).toBeInTheDocument()
    expect(getByTestId('badge')).toHaveClass('bg-blue-500')
  })

  it('should show exact text in (delivered) order status', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivered" />,
    )

    expect(getByText('Entregue')).toBeInTheDocument()
    expect(getByTestId('badge')).toHaveClass('bg-green-800')
  })

  it('should show exact text in (canceled) order status', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="canceled" />)

    expect(getByText('Cancelado')).toBeInTheDocument()
    expect(getByTestId('badge')).toHaveClass('bg-red-800')
  })
})
