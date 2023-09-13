'use client';
import type { FC } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BsFiletypeMdx } from 'react-icons/bs';

type Props = {
  title: string;
  pathname: string;
};
export const PageHeader: FC<Props> = ({ title, pathname }) => {
  const router = useRouter();
  const currentPathname = usePathname();
  const isDocPage = currentPathname.endsWith('/doc');

  return (
    <div className="relative font-m-plus">
      <button
        className="absolute -bottom-3 rounded-lg p-3 font-mono text-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={router.back}
        title="back"
      >
        ../
      </button>
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      {!isDocPage && (
        <Link
          className="absolute -bottom-3 right-0 rounded-lg p-3 underline hover:bg-slate-100 dark:hover:bg-slate-800"
          href={`/${pathname}/doc`}
          title="documentation"
        >
          <BsFiletypeMdx size={28} />
        </Link>
      )}
    </div>
  );
};
