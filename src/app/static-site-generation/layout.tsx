import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Static Site Generation | nobsand',
};

export default function StaticSiteGenerationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Static Site Generation" pathname="static-site-generation" />
      {children}
    </div>
  );
}