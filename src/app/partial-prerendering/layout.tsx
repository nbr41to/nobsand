import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Partial Prerendering | nobsand',
};

export default function PartialPrerenderingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Partial Prerendering" pathname="partial-prerendering" />
      {children}
    </div>
  );
}