import { cn } from '@/lib/utils'

// TODO Fix input width on small screens

const baseStyles = cn(
  'rounded-lg border border-border bg-input px-2 py-1 text-sm transition duration-200 placeholder:text-placeholder disabled:opacity-50',

  // Hover
  'hover:not-focus:border-border-hover',

  // Focus
  'focus:outline-none focus-visible:bg-transparent focus-visible:not-invalid:border-success-foreground focus-visible:invalid:border-error-foreground',

  // Dark
  'dark:border-border dark:bg-input dark:placeholder:text-placeholder dark:hover:not-focus:border-border-hover dark:focus-visible:not-invalid:border-success-foreground dark:focus-visible:invalid:border-error-foreground',
)

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Input({ className, ...props }: Props) {
  return <input className={cn(baseStyles, className)} {...props} />
}
