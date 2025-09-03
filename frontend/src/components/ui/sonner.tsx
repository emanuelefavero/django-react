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
          description: /*tw*/ '!text-muted-foreground',
          actionButton:
            /*tw*/ '!bg-card !text-primary !border !border-primary hover:!bg-primary hover:!text-background',
          cancelButton:
            /*tw*/ '!border !border-muted-foreground !bg-card !text-muted-foreground hover:!bg-muted-foreground hover:!text-background',
          // toast: /*tw*/ '',
          // title: /*tw*/ '',
          // closeButton: /*tw*/ '',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
