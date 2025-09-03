'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          // toast: /*tw*/ '!bg-neutral-500',
          // title: /*tw*/ '!text-white',
          // description: /*tw*/ '!text-neutral-300',
          // actionButton: /*tw*/ '!bg-white/10',
          // cancelButton: /*tw*/ '!bg-white/10',
          // closeButton: /*tw*/ '!bg-white/10',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
