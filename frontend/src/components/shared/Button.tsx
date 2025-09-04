import { cn } from '@/lib/utils'

const baseStyles = cn(
  'cursor-pointer rounded-lg border border-primary px-2 py-1 text-sm text-primary uppercase transition duration-200 select-none',

  // Hover
  'hover:bg-primary hover:text-background',

  // Focus
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-1 focus-visible:ring-offset-background',

  // Active
  'active:scale-[.97]',

  // Disabled
  'disabled:pointer-events-none disabled:opacity-50',
)

type Props = React.ComponentPropsWithRef<'button'> & {}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button className={cn(baseStyles, className)} {...props}>
      {children}
    </button>
  )
}
