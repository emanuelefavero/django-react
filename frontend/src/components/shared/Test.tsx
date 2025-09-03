'use client'

import Button from '@/components/shared/Button'
import { toast } from '@/lib/sonner'

export default function Test() {
  return (
    <div className='mb-4 flex gap-2'>
      <Button
        onClick={() => {
          toast('Default Toast', {
            action: {
              label: 'Dismiss',
              onClick: () => {},
            },
          })
        }}
      >
        Default Toast
      </Button>
      <Button
        onClick={() => {
          toast.success('Success Toast', {
            action: {
              label: 'Dismiss',
              onClick: () => {},
            },
          })
        }}
      >
        Success Toast
      </Button>
      <Button
        onClick={() => {
          toast.error('Error Toast', {
            action: {
              label: 'Dismiss',
              onClick: () => {},
            },
          })
        }}
      >
        Error Toast
      </Button>
    </div>
  )
}
