import type { ReactNode } from 'react';

export default function PineappleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative border bg-yellow-500 p-4">
      <div className="absolute right-0 top-0 border-b border-l p-2">
        Pineapple Layout
      </div>
      <div className="p-12">{children}</div>
    </div>
  );
}
