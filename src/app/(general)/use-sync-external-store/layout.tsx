import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'UseSyncExternalStore | nobsand',
};

export default function UseSyncExternalStoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="UseSyncExternalStore" pathname="use-sync-external-store" />
      {children}
    </div>
  );
}