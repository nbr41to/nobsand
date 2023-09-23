'use client';

import type { FC } from 'react';

import { Prism } from '@mantine/prism';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

export const JsonViewer: FC<Props> = ({ data }) => {
  return (
    <div className="rounded-lg border p-0.5">
      <Prism language="json" radius={6}>
        {JSON.stringify(data, null, 2)}
      </Prism>
    </div>
  );
};
