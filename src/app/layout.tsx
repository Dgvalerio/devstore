import { PropsWithChildren } from 'react';

import type { Metadata, NextPage } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'devstore',
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <html lang="pt-br">
    <body className={inter.variable}>{children}</body>
  </html>
);

export default RootLayout;
