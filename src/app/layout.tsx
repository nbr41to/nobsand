import '@/styles/globals.css';
import '@mantine/core/styles.css';
import '@/styles/destyle.css';
import '@mantine/spotlight/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/notifications/styles.css';

import type { Metadata } from 'next';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { SiPowershell } from 'react-icons/si';

import { Spotlight } from '@/app/providers/SpotlightProvider';
import { BgReactIcon } from '@/components/BgReactIcon';
import { SearchButton } from '@/components/SearchButton';
import { ToggleTheme } from '@/components/ToggleTheme';
import { baloo2, firaCode, notoSansJP } from '@/styles/googleFont';
import { getFileNames } from '@/utils/getPathnames';

export const metadata: Metadata = {
  title: 'nobsand',
  description: 'Next.js でフロントエンドいろいろ試す場所',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const filenames = getFileNames();

  return (
    <>
      <Head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </Head>
      <html lang="ja">
        <body
          className={clsx([
            notoSansJP.variable,
            firaCode.variable,
            baloo2.variable,
            'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100',
          ])}
        >
          <MantineProvider>
            <BgReactIcon />
            <Notifications />
            <Spotlight filenames={filenames} />
            <header className="grid grid-cols-3 border-b border-slate-900 p-4 dark:border-white">
              <SiPowershell size={32} />
              <Link href="/" title="home">
                <h1 className="text-center font-baloo text-4xl">nobsand</h1>
              </Link>
              <div className="ml-auto flex items-center gap-4">
                <a
                  href="https://github.com/nbr41to/nobsand/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={34} />
                </a>
                <ToggleTheme />
                <SearchButton />
              </div>
            </header>
            <main className="p-10">{children}</main>
            <footer></footer>
          </MantineProvider>
        </body>
      </html>
    </>
  );
}
