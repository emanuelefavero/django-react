export const defaultToastClassNames = {
  description: /*tw*/ '!text-muted-foreground',
  actionButton:
    /*tw*/ '!bg-card !text-primary !border !border-primary hover:!bg-primary hover:!text-background',
  cancelButton:
    /*tw*/ '!bg-card !border !border-muted-foreground !text-muted-foreground hover:!bg-muted-foreground hover:!text-background',

  toast: /*tw*/ '',
  title: /*tw*/ '',
  closeButton: /*tw*/ '',
}

export const errorToastClassNames = {
  description: /*tw*/ '!text-muted-foreground',
  toast: /*tw*/ '!bg-error',
  actionButton:
    /*tw*/ '!bg-error !border !border-error-foreground !text-error-foreground hover:!bg-error-foreground hover:!text-error',
  cancelButton:
    /*tw*/ '!bg-error !border !border-muted-foreground !text-muted-foreground hover:!bg-muted-foreground hover:!text-background',
  icon: /*tw*/ '!text-error-foreground',

  title: /*tw*/ '',
  closeButton: /*tw*/ '',
}

export const successToastClassNames = {
  description: /*tw*/ '!text-muted-foreground',
  toast: /*tw*/ '!bg-success',
  actionButton:
    /*tw*/ '!bg-success !border !border-success-foreground !text-success-foreground hover:!bg-success-foreground hover:!text-success',
  cancelButton:
    /*tw*/ '!bg-success !border !border-muted-foreground !text-muted-foreground hover:!bg-muted-foreground hover:!text-background',
  icon: /*tw*/ '!text-success-foreground',

  title: /*tw*/ '',
  closeButton: /*tw*/ '',
}
