import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Books | nobsand',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="h-full space-y-1 bg-slate-600 py-4 font-baloo text-xl">
        <h3 className="whitespace-nowrap px-3">- Categories -</h3>
        <nav>
          <ul className="">
            <li>
              <Link
                className="block bg-slate-600 px-3 py-2 hover:bg-slate-800"
                href="/nextjs-app-router-architecture/books"
              >
                ALL
              </Link>
            </li>
            <li>
              <Link
                className="block bg-slate-600 px-3 py-2 hover:bg-slate-800"
                href="/nextjs-app-router-architecture/books/fiction"
              >
                Fiction
              </Link>
            </li>
            <li>
              <Link
                className="block bg-slate-600 px-3 py-2 hover:bg-slate-800"
                href="/nextjs-app-router-architecture/books/mystery"
              >
                Mystery
              </Link>
            </li>
            <li>
              <Link
                className="block bg-slate-600 px-3 py-2 hover:bg-slate-800"
                href="/nextjs-app-router-architecture/books/biography"
              >
                Biography
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
