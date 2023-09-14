'use client';
import type { FC } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BsFiletypeMdx, BsFiletypeTsx } from 'react-icons/bs';

type Props = {
  title: string;
  pathname: string;
};

export const PageHeader: FC<Props> = ({ title, pathname }) => {
  const router = useRouter();
  const currentPathname = usePathname();
  const isDocPage = currentPathname.endsWith('/doc');

  return (
    <div className="font-m-plus grid grid-cols-3 items-center">
      <button
        className="w-fit rounded-lg p-3 font-mono text-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={router.back}
        title="back"
      >
        ../
      </button>
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <div className="ml-auto flex items-center gap-1">
        <a
          className="rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-800"
          href={`https://github.com/nbr41to/nobsand/blob/main/src/app/${pathname}/page.tsx`}
          title="remote file link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFiletypeTsx size={28} />
        </a>
        {!isDocPage && (
          <Link
            className="rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-800"
            href={`/${pathname}/doc`}
            title="documentation"
          >
            <BsFiletypeMdx size={28} />
          </Link>
        )}
      </div>
    </div>
  );
};
