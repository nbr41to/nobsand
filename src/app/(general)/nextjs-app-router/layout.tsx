import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Link from 'next/link';
import { FaBoltLightning } from 'react-icons/fa6';
import { GiTurtleShell, GiSpottedMushroom } from 'react-icons/gi';

import { PageHeader } from '@/components/PageHeader';

import { CurrentPath } from './components/CurrentPath';

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
      <div className="relative flex border">
        <div className="absolute right-0 top-0 border-b border-l p-2">
          Root Layout
        </div>
        <div className="absolute left-36 top-0 p-2">
          <CurrentPath />
        </div>
        <nav className="border-r">
          <h2 className="border-b p-2 text-center text-xl font-bold">ITEMS</h2>
          <Link
            className="flex items-center gap-2 rounded p-2 text-xl text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="/nextjs-app-router/mush"
          >
            <GiSpottedMushroom size={32} />
            Mush
          </Link>
          <Link
            className="flex items-center gap-2 rounded p-2 text-xl text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="/nextjs-app-router/thunder"
          >
            <FaBoltLightning size={32} />
            Thunder
          </Link>
          <Link
            className="flex items-center gap-2 rounded p-2 text-xl text-green-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            href="/nextjs-app-router/turtle"
          >
            <GiTurtleShell size={32} />
            Turtle
          </Link>
        </nav>
        <div className="flex-grow p-12">{children}</div>
      </div>
    </div>
  );
}
