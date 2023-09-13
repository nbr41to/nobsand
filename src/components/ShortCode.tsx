'use client';

import type { FC } from 'react';

type Props = {
  children: string;
};

export const ShortCode: FC<Props> = ({ children }) => {
  return (
    <code className="rounded-md px-2 py-1 font-mono font-bold text-red-500">
      `{children}`
    </code>
  );
};
