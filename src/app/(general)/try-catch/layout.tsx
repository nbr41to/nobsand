import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'try catch | nobsand',
};

export default function TryCatchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="try catch" pathname="try-catch" />
      {children}
    </div>
  );
}