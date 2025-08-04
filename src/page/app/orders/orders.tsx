import { Pagination } from '@/components/pagination/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './components/order-table-filters'
import { OrderTableRow } from './components/order-table-row'

export function Orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-36">Identificador</TableHead>
                  <TableHead className="w-44">Realizado há</TableHead>
                  <TableHead className="w-36">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-36">Total de Pedido</TableHead>
                  <TableHead className="w-40"></TableHead>
                  <TableHead className="w-36"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => {
                  return <OrderTableRow key={index} />
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination totalCount={97} pageIndex={0} totalPerPage={8} />
        </div>
      </div>
    </>
  )
}
