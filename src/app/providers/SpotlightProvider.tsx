'use client';

import { Spotlight as BaseSpotlight } from '@mantine/spotlight';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

/**
 * @see https://mantine.dev/others/spotlight/
 */
export const Spotlight = ({ filenames }: { filenames: string[] }) => {
  const router = useRouter();
  const actions = useMemo(() => {
    if (filenames.length === 0) return [];

    return filenames.map((filename) => ({
      id: filename,
      label: filename,
      onClick: () => router.push(`/${filename}`),
    }));
  }, [filenames, router]);

  return (
    <BaseSpotlight
      actions={[
        {
          id: 'home',
          label: 'home',
          onClick: () => router.push('/'),
        },
        ...actions,
      ]}
      shortcut={['mod + P', 'mod + K', '/']}
    />
  );
};
