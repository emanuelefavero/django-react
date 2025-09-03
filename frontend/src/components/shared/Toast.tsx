import {
  defaultToastClassNames,
  errorToastClassNames,
  successToastClassNames,
} from '@/styles/sonner'
import { toast } from 'sonner'

export type ToastOptions = Parameters<typeof toast>[1]
export type ToastVariant = 'default' | 'success' | 'error'

export type Props = ToastOptions & {
  variant?: ToastVariant
  title: string
  classNames?: Partial<typeof defaultToastClassNames>
}

export function Toast({
  variant = 'default',
  title,
  classNames,
  ...options
}: Props) {
  if (variant === 'success') {
    return toast.success(title, {
      classNames: classNames ?? successToastClassNames,
      ...options,
    })
  }
  if (variant === 'error') {
    return toast.error(title, {
      classNames: classNames ?? errorToastClassNames,
      ...options,
    })
  }
  return toast(title, {
    classNames: classNames ?? defaultToastClassNames,
    ...options,
  })
}
