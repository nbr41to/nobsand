import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Link from 'next/link';
import { BsFire } from 'react-icons/bs';
import { FaBoltLightning } from 'react-icons/fa6';
import { HiSun } from 'react-icons/hi';

import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Nextjs App Router | nobsand',
};

export default function NextjsAppRouterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="space-y-8">
      <PageHeader title="Nextjs App Router" pathname="nextjs-app-router" />
      <div className="flex">
        <nav>
          <Link href="/nextjs-app-router/fire">
            <BsFire size={60} />
            Fire
          </Link>
          <Link href="/nextjs-app-router/sun">
            <HiSun size={60} />
            Sun
          </Link>
          <Link href="/nextjs-app-router/thunder">
            <FaBoltLightning size={60} />
            Thunder
          </Link>
        </nav>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
