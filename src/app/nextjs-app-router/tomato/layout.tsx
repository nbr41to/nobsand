import type { ReactNode } from 'react';

export default function TomatoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-red-500 p-4">
      <div className="absolute right-0 top-0">Tomato Layout</div>
      {children}
    </div>
  );
}
