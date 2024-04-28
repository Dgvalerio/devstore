'use client';
import { FC, Suspense } from 'react';

import { useSearchParams } from 'next/navigation';

import { Skeleton } from '@/components/skeleton';

const Result: FC = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get('q');

  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query}</span>
    </p>
  );
};

const SearchLoading: FC = () => (
  <div className="flex flex-col gap-4">
    <Suspense>
      <Result />
    </Suspense>
    <div className="grid grid-cols-3 gap-6">
      <Skeleton className="h-[400px]" />
      <Skeleton className="h-[400px]" />
      <Skeleton className="h-[400px]" />
      <Skeleton className="h-[400px]" />
      <Skeleton className="h-[400px]" />
      <Skeleton className="h-[400px]" />
    </div>
  </div>
);

export default SearchLoading;
