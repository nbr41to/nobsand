import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Mypage | nobsand',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="space-y-8">{children}</div>;
}
