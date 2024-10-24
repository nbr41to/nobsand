import type { ReactNode } from 'react';

export default function PenLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative border bg-zinc-500 p-4">
      <div className="absolute right-0 top-0 border-b border-l p-2">
        Pen Layout
      </div>
      <div className="p-12">{children}</div>
    </div>
  );
}
