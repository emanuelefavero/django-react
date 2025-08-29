import { cn } from '@/lib/utils'

// TODO Fix input width on small screens

const baseStyles = cn(
  'rounded-lg border border-neutral-400 bg-neutral-100 px-2 py-1 text-sm transition duration-200 placeholder:text-neutral-400 disabled:opacity-50',

  'hover:not-focus:border-neutral-500', // Hover

  'focus:outline-none focus-visible:bg-transparent focus-visible:not-invalid:border-emerald-600 focus-visible:invalid:border-pink-600', // Focus

  'dark:border-neutral-700 dark:bg-neutral-900 dark:placeholder:text-neutral-500 dark:hover:not-focus:border-neutral-600 dark:focus-visible:not-invalid:border-emerald-700 dark:focus-visible:invalid:border-pink-800', // Dark
)

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Input({ className, ...props }: Props) {
  return <input className={cn(baseStyles, className)} {...props} />
}
