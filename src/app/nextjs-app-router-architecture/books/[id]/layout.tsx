'use client';

import type { ReactNode } from 'react';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="space-y-6 p-10">
      <div className="flex justify-between gap-4">
        <Button variant="outline" onClick={router.back}>
          Back
        </Button>
        <div className="space-x-4">
          <Button>Share</Button>
          <Button>Add Cart</Button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
