'use client';

import type { Language } from 'prism-react-renderer';
import type { FC } from 'react';

import { Prism } from '@mantine/prism';

type Props = {
  language?: string;
  children: string;
};

export const CodeBlock: FC<Props> = ({ language = 'tsx', children }) => {
  return (
    <div className="rounded-lg border p-0.5">
      <Prism
        language={language as Language}
        colorScheme="dark"
        radius={6}
        withLineNumbers
      >
        {children}
      </Prism>
    </div>
  );
};
