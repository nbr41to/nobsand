'use client';

import { Table } from '@mantine/core';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import dummyData from './data.json';

type TableData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  plan: string;
};

/* ここに見せたいテーブルの要件を定義する感じ（実際のデータがなくても定義できる） */
const columnHelper = createColumnHelper<TableData>();
const columns = [
  columnHelper.group({
    id: 'user',
    header: () => <div className="text-center font-bold">User</div>,
    columns: [
      columnHelper.display({
        id: 'name',
        header: () => 'Name',
        cell: (info) => (
          <div>
            {info.row.original.firstName} {info.row.original.lastName}
          </div>
        ),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('age', {
        header: () => 'Age',
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
    ],
    footer: (info) => info.column.id,
  }),
  columnHelper.group({
    id: 'service',
    header: () => <div className="text-center font-bold">Service</div>,
    columns: [
      columnHelper.accessor('email', {
        header: () => 'Email',
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('plan', {
        header: () => 'Plan',
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
    ],
    footer: (info) => info.column.id,
  }),
];

export default function TanstackReactTablePage() {
  const table = useReactTable({
    data: dummyData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      <h2 className="text-xl">Basic Table</h2>
      <Table withTableBorder withColumnBorders striped highlightOnHover>
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
        <Table.Tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <Table.Tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <Table.Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Tfoot>
      </Table>
    </div>
  );
}
