import '@/styles/globals.css';
import '@/styles/destyle.css';
import type { Metadata } from 'next';

import clsx from 'clsx';
import Link from 'next/link';
import { SiPowershell } from 'react-icons/si';

import { ToggleTheme } from '@/components/ToggleTheme';
import {
  baloo2,
  firaCode,
  mPlusRounded1c,
  notoSansJP,
} from '@/styles/googleFont';

export const metadata: Metadata = {
  title: 'nobsand',
  description: 'Next.js でフロントエンドいろいろ試す場所',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={clsx([
          notoSansJP.variable,
          firaCode.variable,
          baloo2.variable,
          mPlusRounded1c.variable,
          'dark:bg-slate-900 dark:text-slate-100',
        ])}
      >
        <header className="flex justify-between border-b border-slate-900 p-4 dark:border-white">
          <SiPowershell size={32} />
          <Link href="/" title="top">
            <h1 className="text-center font-baloo text-4xl">nobsand</h1>
          </Link>
          <ToggleTheme />
        </header>
        <main className="p-10">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
