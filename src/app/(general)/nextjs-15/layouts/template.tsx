'use client';

import { useState, type ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  console.log('render Template');

  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">
      <div>this is template.tsx</div>

      <div>
        <button onClick={() => setCount(count + 1)}>count: {count}</button>
      </div>

      <div>{children}</div>
    </div>
  );
}
