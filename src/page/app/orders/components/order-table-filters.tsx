import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { orderTableFiltersSchema, type TOrderTableFilters } from '../types'

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { register, handleSubmit, control, reset } =
    useForm<TOrderTableFilters>({
      resolver: zodResolver(orderTableFiltersSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    })

  function handleFilter(data: TOrderTableFilters) {
    setSearchParams((state) => {
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          state.set(key, value)
        } else {
          state.delete(key, value)
        }
      })
      state.set('page', '1')

      return state
    })
  }

  function handleCleanFilter() {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')
      state.set('page', '1')

      return state
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        {...register('orderId')}
        placeholder="ID do pedido"
        autoComplete="off"
        className="h-8 w-auto"
      />
      <Input
        {...register('customerName')}
        placeholder="Nome do cliente"
        autoComplete="off"
        className="h-8 w-80"
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="w-44" size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os pedidos</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Preparando pedido</SelectItem>
                <SelectItem value="delivering">Saiu para entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />
      <Button variant="outline" type="submit" size="xs">
        <Search className="h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        onClick={handleCleanFilter}
        type="button"
        variant="secondary"
        size="xs"
      >
        <X className="h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
