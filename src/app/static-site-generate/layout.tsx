import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'static site generate | nobsand',
};

export default function StaticSiteGenerateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="static site generate" pathname="static-site-generate" />
      {children}
    </div>
  );
}