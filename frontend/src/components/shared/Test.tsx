'use client'

import Button from '@/components/shared/Button'
import {
  defaultToastClassNames,
  errorToastClassNames,
  successToastClassNames,
} from '@/styles/sonner'
import { toast } from 'sonner'

// TODO style toasts (to style default toast, @see @/components/ui/sonner.tsx)
/*
TODO add a `@/components/shared/Toast.tsx` component that wraps sonner's `toast` functions and export it with variants "default", "success", and "error"

// EXAMPLE:
import { toast } from 'sonner'
import { successToastClassNames, errorToastClassNames } from '@/styles/sonner'

export type ToastOptions = Parameters<typeof toast>[1]
export type ToastVariant = 'default' | 'success' | 'error'

export interface CustomToastProps extends ToastOptions {
  variant?: ToastVariant
  title: string
}

export function Toast({ variant = 'default', title, classNames, ...options }: CustomToastProps) {
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
    classNames,
    ...options,
  })
}
*/

export default function Test() {
  return (
    <div className='mb-4 flex gap-2'>
      <Button
        onClick={() => {
          toast('Default Toast', {
            classNames: defaultToastClassNames,

            description: 'This is a test toast',
            duration: 60000,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancel'),
            },
            closeButton: true,
            dismissible: true,
            // invert: true,
            position: 'top-right',
          })
        }}
      >
        Default Toast
      </Button>
      <Button
        onClick={() => {
          toast.success('Success Toast', {
            classNames: successToastClassNames,

            description: 'This is a test toast',
            duration: 60000,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancel'),
            },
            closeButton: true,
            dismissible: true,
            // invert: true,
            position: 'top-right',
          })
        }}
      >
        Success Toast
      </Button>
      <Button
        onClick={() => {
          toast.error('Error Toast', {
            classNames: errorToastClassNames,

            description: 'This is a test toast',
            duration: 60000,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
            cancel: {
              label: 'Cancel',
              onClick: () => console.log('Cancel'),
            },
            closeButton: true,
            dismissible: true,
            // invert: true,
            position: 'top-right',
          })
        }}
      >
        Error Toast
      </Button>
    </div>
  )
}
