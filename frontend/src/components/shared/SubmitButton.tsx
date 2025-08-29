'use client'

import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'

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
      className={cn(className)}
      {...props}
    >
      {pending && pendingLabel ? pendingLabel : label}
    </button>
  )
}
