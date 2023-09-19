import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Zod | nobsand',
};

export default function ZodLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Zod" pathname="zod" />
      {children}
    </div>
  );
}