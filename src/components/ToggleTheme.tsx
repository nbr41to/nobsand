'use client';

import type { FC } from 'react';

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export const ToggleTheme: FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', {
    getInitialValueInEffect: true,
  });

  const toggleTheme = () => {
    if (computedColorScheme === 'dark') {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };

  return (
    <div>
      <ActionIcon
        radius={9999}
        variant="filled"
        color={computedColorScheme === 'light' ? 'yellow' : 'blue'}
        size="lg"
        onClick={toggleTheme}
      >
        {computedColorScheme === 'light' ? (
          <BsMoonStarsFill size={18} />
        ) : (
          <BsSun size={18} />
        )}
      </ActionIcon>
    </div>
  );
};
