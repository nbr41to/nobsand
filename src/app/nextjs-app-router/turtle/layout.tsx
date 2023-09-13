import type { ReactNode } from 'react';

export default function TurtleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative border bg-green-400 p-4">
      <div className="absolute right-0 top-0 border-b border-l p-2">
        Turtle Layout
      </div>
      <div className="p-12">{children}</div>
    </div>
  );
}
