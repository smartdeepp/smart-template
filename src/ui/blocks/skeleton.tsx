import { cn } from '@app/utils/className.helper';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800', className)}
      {...props}
    />
  );
}

export { Skeleton };
