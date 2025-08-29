import { cn } from '@/lib/utils'

type Props = React.ComponentPropsWithRef<'input'> & {}

export default function Input({ className, ...props }: Props) {
  return <input className={cn(className)} {...props} />
}
