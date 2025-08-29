import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        'rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1 text-sm transition duration-200 placeholder:text-neutral-400 focus:outline-none focus-visible:bg-transparent dark:border-neutral-700 dark:bg-neutral-900 dark:placeholder:text-neutral-500',
        className,
      )}
      {...props}
    />
  )
}
