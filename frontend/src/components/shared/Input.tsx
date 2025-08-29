import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'input'> & {}

// TODO Fix input width on small screens

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        'rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1 text-sm transition duration-200 placeholder:text-neutral-400 hover:not-focus:border-neutral-500 focus:outline-none focus-visible:bg-transparent focus-visible:invalid:border-(--primary) disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:placeholder:text-neutral-500 dark:hover:not-focus:border-neutral-600',
        className,
      )}
      {...props}
    />
  )
}
