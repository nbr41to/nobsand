import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { BackButton } from '@/app/(general)/parallel-routes/components/BackButton';
import { OpenModalButton } from '@/app/(general)/parallel-routes/components/OpenModalButton';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Parallel Routes | nobsand',
};

export default function ParallelRoutesLayout({
  children,
  apple,
  face,
  modal,
}: {
  children: ReactNode;
  apple: ReactNode;
  face: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="space-y-8">
      <PageHeader title="Parallel Routes" pathname="parallel-routes" />
      <div>{children}</div>
      <OpenModalButton />
      <BackButton />
      <div className="flex justify-center space-x-8">
        <div className="w-1/2">{apple}</div>
        <div className="w-1/2">{face}</div>
      </div>
      <div>{modal}</div>
    </div>
  );
}
