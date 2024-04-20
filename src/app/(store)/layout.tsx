import { PropsWithChildren } from 'react';

import { NextPage } from 'next';

import { Header } from '@/components/header';

const StoreLayout: NextPage<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default StoreLayout;
