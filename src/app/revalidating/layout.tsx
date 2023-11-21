import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Link from 'next/link';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Revalidating | nobsand',
};

export default function RevalidatingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-8">
      <PageHeader title="Revalidating" pathname="revalidating" />
      <div className="flex gap-4">
        <Link className="hover:underline" href="/revalidating/fetch-options">
          fetch.options
        </Link>
        <Link className="hover:underline" href="/revalidating/segment-config">
          Segment Config Options
        </Link>
        <Link className="hover:underline" href="/revalidating/revalidate-tag">
          revalidateTag
        </Link>
      </div>
      {children}
    </div>
  );
}
