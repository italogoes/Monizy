import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CardTitle } from "./ui/card"

const data: any[] = [
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
  {
    id: "1",
    transacao: "Aluguel",
    valor: 1.200,
    categoria: "Moradia",
    data: "2025-04-10"
  },
]

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "transacao",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transação
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="px-4">{row.getValue("transacao")}</div>
    ),
  },
  {
    accessorKey: "valor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valor
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("valor"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div>{formatted}</div>
    },
  },
  {
    accessorKey: "categoria",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Categoria
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        <div className="px-4">{row.getValue("categoria")}</div>
      )
    }
  },
  {
    accessorKey: "data",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div>{row.getValue("data")}</div>,
  },
]

export function TransfersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full px-6">
      <div className="border px-6 rounded-md shadow-sm">
        <CardTitle className="py-5">Historico de Transações</CardTitle>

        <div className="rounded-md border">
            <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                    return (
                        <TableHead key={header.id}>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </TableHead>
                    )
                    })}
                </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                    <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="line-table-transfers"
                    >
                    {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )}
                        </TableCell>
                    ))}
                    </TableRow>
                ))
                ) : (
                <TableRow>
                    <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                    >
                    No results.
                    </TableCell>
                </TableRow>
                )}
            </TableBody>
            </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
            
            <div className="space-x-2">
              <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
              >
                  Anterior
              </Button>
              <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
              >
                  Próximo
              </Button>
            </div>
        </div>
        </div>
    </div>
  )
}
