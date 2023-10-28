import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Server Actions | nobsand',
};

export default function ServerActionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Server Actions" pathname="server-actions" />
      {children}
    </div>
  );
}