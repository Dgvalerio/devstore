import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

import { Header } from '@/components/header';

const StoreLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
    <Header />
    {children}
  </div>
);

export default StoreLayout;
