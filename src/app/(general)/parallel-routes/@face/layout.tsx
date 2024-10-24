import type { ReactNode } from 'react';

import Link from 'next/link';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <div>Face</div>
      <div className="space-x-2">
        <Link className="rounded border p-1" href="/parallel-routes/smile">
          Smile
        </Link>
        <Link className="rounded border p-1" href="/parallel-routes/cry">
          Cry
        </Link>
      </div>
      <div className="text-[200px]">{children}</div>
    </div>
  );
}
