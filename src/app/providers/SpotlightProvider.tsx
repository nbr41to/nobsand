'use client';

import { SpotlightProvider as BaseSpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

/**
 * @see https://mantine.dev/others/spotlight/
 */
export const SpotlightProvider = ({
  filenames,
  children,
}: {
  filenames: string[];
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const actions = useMemo(() => {
    if (filenames.length === 0) return [];

    return filenames.map((filename) => ({
      title: filename,
      onTrigger: () => router.push(`/${filename}`),
    }));
  }, [filenames, router]);

  return (
    <BaseSpotlightProvider
      actions={[
        {
          title: 'home',
          onTrigger: () => router.push('/'),
        },
        ...actions,
      ]}
      shortcut={['mod + P', 'mod + K', '/']}
    >
      {children}
    </BaseSpotlightProvider>
  );
};
