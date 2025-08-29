import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Input({ className, ...props }: Props) {
  const baseStyles = `border border-neutral-700 bg-neutral-900 text-sm rounded-lg px-2 py-1 focus:outline-none focus-visible:bg-transparent placeholder:text-neutral-500 transition duration-200`

  return <input className={cn(baseStyles, className)} {...props} />
}
