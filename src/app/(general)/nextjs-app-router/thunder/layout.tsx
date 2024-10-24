import type { ReactNode } from 'react';

export default function ThunderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative border bg-yellow-400 p-4">
      <div className="absolute right-0 top-0 border-b border-l p-2">
        Thunder Layout
      </div>
      <div className="p-12">{children}</div>
    </div>
  );
}
