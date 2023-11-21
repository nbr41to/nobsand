import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Revalidating | nobsand',
};

export default function RevalidatingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Revalidating" pathname="revalidating" />
      {children}
    </div>
  );
}