'use client';

import type { ColorScheme } from '@mantine/core';

import {
  MantineProvider as BaseMantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import { useState } from 'react';

/**
 * @see https://mantine.dev/guides/dark-theme/#colorschemeprovider
 */
export const MantineProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme="dark"
      toggleColorScheme={toggleColorScheme}
    >
      <BaseMantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </BaseMantineProvider>
    </ColorSchemeProvider>
  );
};
