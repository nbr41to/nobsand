'use client';
import type { FC } from 'react';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

export const BackButton: FC = () => {
  const router = useRouter();

  return <Button onClick={router.back}>Back</Button>;
};
