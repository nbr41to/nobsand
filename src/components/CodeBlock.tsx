'use client';

import type { FC } from 'react';

import { CodeHighlight } from '@mantine/code-highlight';

type Props = {
  language?: string;
  children: string;
};

export const CodeBlock: FC<Props> = ({ language = 'tsx', children }) => {
  return (
    <div className="rounded-lg border p-0.5">
      <CodeHighlight
        withCopyButton={false}
        language={language}
        code={children}
        styles={{
          code: {
            fontSize: 20,
            fontWeight: 600,
          },
        }}
      />
    </div>
  );
};
