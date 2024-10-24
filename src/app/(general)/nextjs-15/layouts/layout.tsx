'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 underline">
        <Link href="/nextjs-15/layouts/template/a">template.tsx/a</Link>
        <Link href="/nextjs-15/layouts/template/b">template.tsx/b</Link>
        <Link href="/nextjs-15/layouts/a">layout.tsx/a</Link>
        <Link href="/nextjs-15/layouts/b">layout.tsx/b</Link>
        <div>
          <button onClick={() => setCount(count + 1)}>count: {count}</button>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
