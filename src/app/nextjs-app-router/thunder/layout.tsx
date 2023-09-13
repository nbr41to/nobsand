import type { ReactNode } from 'react';

export default function ThunderLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-yellow-400 p-4">
      <div className="absolute right-0 top-0">Thunder Layout</div>
      {children}
    </div>
  );
}
