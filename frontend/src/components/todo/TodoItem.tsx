'use client'

import { deleteTodo, toggleTodo } from '@/app/actions/todo'
import Button from '@/components/shared/Button'
import RelativeDate from '@/components/shared/RelativeDate'
import { toast } from '@/lib/sonner'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'

type Props = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

// TODO add edit functionality (EDIT button + inline editing)
// TODO EDIT button should turn into SAVE button when editing
// TODO pressing ESC should cancel the edit, pressing ENTER should save the edit

export default function TodoItem({ todo, className, ...props }: Props) {
  const handleToggle = async () => {
    const result = await toggleTodo(todo.id, !todo.completed)
    if (result.error)
      toast.error(result.error, {
        cancel: {
          label: 'Dismiss',
          onClick: () => {},
        },
      })
  }

  const handleDelete = async () => {
    const result = await deleteTodo(todo.id)
    if (result?.error)
      toast.error(result.error, {
        cancel: {
          label: 'Dismiss',
          onClick: () => {},
        },
      })
  }

  return (
    <li
      className={cn(
        'flex flex-col flex-wrap overflow-hidden rounded-lg border border-border',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-2 border-b border-border bg-input px-3 py-2',
          todo.completed && 'bg-success',
        )}
      >
        <div className='font-semibold'>{todo.title}</div>

        <div className='flex flex-wrap gap-2'>
          <Button
            onClick={handleToggle}
            className={cn(
              !todo.completed &&
                'border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background',
              todo.completed &&
                'border-success-foreground text-success-foreground hover:bg-success-foreground hover:text-background',
            )}
          >
            ✔︎
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>

      <div className='px-3 py-2'>
        <div className='text-muted-foreground'>
          Created: <RelativeDate date={todo.created} />
        </div>
        <div className='text-muted-foreground'>
          Updated: <RelativeDate date={todo.updated} />
        </div>
      </div>
    </li>
  )
}
