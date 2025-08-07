import { render } from '@testing-library/react'
import { OrderStatus } from './order-status'

describe('Order status', () => {
  it('should show exact text in (pending) order status', () => {

    const wrapper = render(<OrderStatus status='pending' />)
    const statusTesxt = wrapper.getByText('Pendente')
    const statusBadElement = wrapper.getByTestId('badge')

    expect(statusTesxt).toBeInTheDocument()
    expect(statusBadElement).toHaveClass('bg-zinc-500')

  })

  it('should show exact text in (processing) order status', () => {

    const wrapper = render(<OrderStatus status='processing' />)
    const statusTesxt = wrapper.getByText('Preparando pedido')
    const statusBadElement = wrapper.getByTestId('badge')

    expect(statusTesxt).toBeInTheDocument()
    expect(statusBadElement).toHaveClass('bg-amber-400')

  })

  it('should show exact text in (delivering) ordeer status', () => {

    const wrapper = render(<OrderStatus status='delivering' />)
    const statusTesxt = wrapper.getByText('Em entrega')
    const statusBadElement = wrapper.getByTestId('badge')

    expect(statusTesxt).toBeInTheDocument()
    expect(statusBadElement).toHaveClass('bg-blue-500')

  })

  it('should show exact text in (delivered) order status', () => {

    const wrapper = render(<OrderStatus status='delivered' />)
    const statusTesxt = wrapper.getByText('Entregue')
    const statusBadElement = wrapper.getByTestId('badge')

    expect(statusTesxt).toBeInTheDocument()
    expect(statusBadElement).toHaveClass('bg-green-800')

  })

  it('should show exact text in (canceled) order status', () => {

    const wrapper = render(<OrderStatus status='canceled' />)
    const statusTesxt = wrapper.getByText('Cancelado')
    const statusBadElement = wrapper.getByTestId('badge')

    expect(statusTesxt).toBeInTheDocument()
    expect(statusBadElement).toHaveClass('bg-red-800')

  })
})