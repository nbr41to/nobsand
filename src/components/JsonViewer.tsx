'use client';

import type { FC } from 'react';

import { CodeHighlightTabs } from '@mantine/code-highlight';
import { VscJson } from 'react-icons/vsc';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export const JsonViewer: FC<Props> = ({ data }) => {
  return (
    <div className="rounded-lg border p-0.5">
      <CodeHighlightTabs
        styles={{
          code: {
            fontSize: 20,
            fontWeight: 600,
          },
        }}
        code={{
          language: 'json',
          fileName: 'JSON',
          code: JSON.stringify(data, null, 2),
          icon: <VscJson size={18} />,
        }}
      />
    </div>
  );
};
