import type { ReactNode } from 'react';

export default function LemonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-yellow-400 p-4">
      <div className="absolute right-0 top-0">Lemon Layout</div>
      {children}
    </div>
  );
}
