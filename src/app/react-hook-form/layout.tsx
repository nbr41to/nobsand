import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'React Hook Form | nobsand',
};

export default function ReactHookFormLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="React Hook Form" pathname="react-hook-form" />
      {children}
    </div>
  );
}