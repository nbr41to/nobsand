import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Nextjs App Router Architecture | nobsand',
};

export default function NextjsAppRouterArchitectureLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="Nextjs App Router Architecture" pathname="nextjs-app-router-architecture" />
      {children}
    </div>
  );
}