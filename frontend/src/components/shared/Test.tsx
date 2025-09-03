'use client'

import Button from '@/components/shared/Button'
import { errorToastClassNames, successToastClassNames } from '@/styles/sonner'
import { toast } from 'sonner'

export default function Test() {
  return (
    <div className='mb-4 flex gap-2'>
      <Button
        onClick={() => {
          toast('Default Toast', {
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
