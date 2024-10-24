import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Link from 'next/link';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Nextjs App Router Architecture | nobsand',
};

export default function NextjsAppRouterArchitectureLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Nextjs App Router Architecture"
        pathname="nextjs-app-router-architecture"
      />
      <div>
        <div className="flex items-end gap-4 border-b font-baloo">
          <Link className="text-2xl" href="/nextjs-app-router-architecture">
            BOOK^NOB 😋
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="text-xl"
                  href="/nextjs-app-router-architecture/books"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl"
                  href="/nextjs-app-router-architecture/mypage"
                >
                  My Page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </div>
    </div>
  );
}
