'use client';

import type { FC } from 'react';

import { FaReact } from 'react-icons/fa6';

export const BgReactIcon: FC = () => {
  return (
    <div className="fixed left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform text-slate-200/50 dark:text-slate-800/50">
      <FaReact className="animate-slow-spin" size={600} />
    </div>
  );
};
