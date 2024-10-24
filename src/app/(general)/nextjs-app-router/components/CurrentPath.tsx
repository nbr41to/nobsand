'use client';

import type { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const CurrentPath: FC = () => {
  const currentPathname = usePathname();
  const pathnames = currentPathname.split('/');

  const getPathname = (name: string) => {
    const index = pathnames.indexOf(name);
    const pathArray = pathnames.slice(0, index + 1);

    return pathArray.join('/');
  };

  return (
    <div className="font-bold">
      {pathnames.map((path, index) => (
        <Link
          key={index}
          className="inline-block whitespace-nowrap font-mono hover:underline"
          href={getPathname(path)}
          title="documentation"
        >
          {path === '' ? '~' : '/' + path}
        </Link>
      ))}
    </div>
  );
};
