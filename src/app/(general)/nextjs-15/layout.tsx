import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'nextjs-15 | nobsand',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="nextjs-15" pathname="nextjs-15" />
      {children}
    </div>
  );
}
