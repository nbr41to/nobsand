import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Dark Mode | nobsand',
};

export default function DarkModeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title="DarkMode" pathname="dark-mode" />
      {children}
    </div>
  );
}
