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
      <Table withBorder withColumnBorders striped highlightOnHover>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </Table>
    </div>
  );
}
