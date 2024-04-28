import { ComponentProps, FC } from 'react';

import { twMerge } from 'tailwind-merge';

export const Skeleton: FC<ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
    {...props}
  />
);
