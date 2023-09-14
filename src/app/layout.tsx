import type { Metadata } from 'next';

import clsx from 'clsx';
import Link from 'next/link';
import { SiPowershell } from 'react-icons/si';

import { MantineProvider } from '@/app/providers/MantineProvider';
import { SpotlightProvider } from '@/app/providers/SpotlightProvider';
import { SearchButton } from '@/components/SearchButton';
import { ToggleTheme } from '@/components/ToggleTheme';
import { baloo2, firaCode, notoSansJP } from '@/styles/googleFont';
import { getFileNames } from '@/utils/getPathnames';

import '@/styles/globals.css';
import '@/styles/destyle.css';

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
          <SpotlightProvider filenames={filenames}>
            <header className="grid grid-cols-3 border-b border-slate-900 p-4 dark:border-white">
              <SiPowershell size={32} />
              <Link href="/" title="home">
                <h1 className="text-center font-baloo text-4xl">nobsand</h1>
              </Link>
              <div className="ml-auto flex items-center gap-4">
                <ToggleTheme />
                <SearchButton />
              </div>
            </header>
            <main className="p-10">{children}</main>
            <footer></footer>
          </SpotlightProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
