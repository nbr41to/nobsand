import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Server Side Rendering | nobsand',
};

export default function ServerSideRenderingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Server Side Rendering" pathname="server-side-rendering" />
      {children}
    </div>
  );
}