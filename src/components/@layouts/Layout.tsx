import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useTheme } from 'next-themes';
import { FC, ReactNode } from 'react';
import { ThemeSwitch } from './ThemeSwitch';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <MantineProvider
      theme={{ colorScheme: (theme || 'dark') as 'light' | 'dark' }}
    >
      <NotificationsProvider position='top-center'>
        <div>
          <div className='fixed right-2'>
            <ThemeSwitch />
          </div>

          <header>
            <h1 className='m-0 text-center font-baloo'>nob-sandbox</h1>
          </header>

          <main className='p-6'>{children}</main>
        </div>
      </NotificationsProvider>
    </MantineProvider>
  );
};
