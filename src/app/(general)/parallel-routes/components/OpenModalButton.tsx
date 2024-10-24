'use client';
import type { FC } from 'react';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

export const OpenModalButton: FC = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/parallel-routes/open')}>
      open modal
    </Button>
  );
};
