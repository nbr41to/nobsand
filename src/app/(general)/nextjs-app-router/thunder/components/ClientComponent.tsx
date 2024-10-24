'use client';
import type { FC } from 'react';

export const ClientComponent: FC = () => {
  return (
    <div className="h-48 w-48 rounded border">
      <h3 className="border-b py-1 text-center text-xl">Client Component</h3>
      <p className="p-3">this is client component</p>
    </div>
  );
};
