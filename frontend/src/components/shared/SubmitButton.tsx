'use client'

import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'

const baseStyles = cn(
  'cursor-pointer rounded-lg border border-(--primary) px-2 py-1 text-sm text-(--primary) uppercase transition duration-200 select-none',

  // Hover
  'hover:bg-(--primary) hover:text-(--background)',

  // Focus
  'focus:outline-none focus-visible:ring-1 focus-visible:ring-(--focus) focus-visible:ring-offset-1 focus-visible:ring-offset-(--background)',

  // Active
  'active:scale-[.97]',

  // Disabled
  'disabled:pointer-events-none disabled:opacity-50',
)

type Props = React.ComponentPropsWithRef<'button'> & {
  label: string
  pendingLabel?: string
}

export default function SubmitButton({
  label,
  pendingLabel,
  className,
  ...props
}: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className={cn(baseStyles, className)}
      {...props}
    >
      {pending && pendingLabel ? pendingLabel : label}
    </button>
  )
}
