import { PropsWithChildren } from 'react';

import type { Metadata, NextPage } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: { template: '%s | devstore', default: 'devstore' },
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <html lang="pt-br" className={inter.variable}>
    <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
  </html>
);

export default RootLayout;
