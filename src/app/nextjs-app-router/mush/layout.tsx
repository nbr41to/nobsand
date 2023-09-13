import type { ReactNode } from 'react';

import Link from 'next/link';
import { BsFillPenFill } from 'react-icons/bs';
import { GiShinyApple, GiPineapple } from 'react-icons/gi';

export default function MushLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative border bg-rose-400 p-4">
      <div className="absolute right-0 top-0 border-b border-l p-2">
        Mush Layout
      </div>
      <div className="p-12">{children}</div>
      <div className="flex justify-center gap-4">
        <Link
          className="rounded-xl border p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
          href="/nextjs-app-router/mush/apple"
        >
          <GiShinyApple size={60} />
        </Link>
        <Link
          className="rounded-xl border p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
          href="/nextjs-app-router/mush/pen"
        >
          <BsFillPenFill size={60} />
        </Link>
        <Link
          className="rounded-xl border p-4 hover:bg-slate-100 dark:hover:bg-slate-800"
          href="/nextjs-app-router/mush/pineapple"
        >
          <GiPineapple size={60} />
        </Link>
      </div>
    </div>
  );
}
