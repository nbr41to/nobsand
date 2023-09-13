import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Tanstack React Table | nobsand',
};

export default function TanstackReactTableLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Tanstack React Table" pathname="tanstack-react-table" />
      {children}
    </div>
  );
}