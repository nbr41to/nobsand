'use client';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

export const RefreshButton = () => {
  const { refresh } = useRouter();

  return <Button onClick={refresh}>useRouter.refresh()</Button>;
};
