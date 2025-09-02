'use client'

import { deleteTodo, toggleTodo } from '@/app/actions'
import Button from '@/components/shared/Button'
import RelativeDate from '@/components/shared/RelativeDate'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'

type Props = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

// TODO Catch server actions errors gracefully with sonner toasts
/*
TODO Create global tailwind classes for success and error toasts

Example usage:
toast.error('Hello World', {
  classNames: {
    toast: '!bg-red-500',
    title: '!text-white',
    description: '!text-neutral-300',
    actionButton: '!bg-white/10',
    cancelButton: '!bg-white/10',
    closeButton: '!bg-white/10',
  },
})
*/

export default function TodoItem({ todo, className, ...props }: Props) {
  return (
    <li
      className={cn(
        'flex flex-col flex-wrap rounded-lg border border-neutral-500/40',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-2 border-b border-neutral-500/40 bg-neutral-500/10 px-3 py-2',
          todo.completed && 'bg-green-500/10',
        )}
      >
        <div className='font-semibold'>{todo.title}</div>

        <div className='flex flex-wrap gap-2'>
          <Button
            onClick={() => toggleTodo(todo.id, !todo.completed)}
            className={cn(
              !todo.completed &&
                'border-neutral-500 text-neutral-500 hover:bg-neutral-500 hover:text-(--background)',
              todo.completed &&
                'border-green-500 text-green-500 hover:bg-green-500 hover:text-(--background)',
            )}
          >
            ✔︎
          </Button>
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </div>
      </div>

      <div className='px-3 py-2'>
        <div className='text-neutral-500'>
          Created: <RelativeDate date={todo.created} />
        </div>
        <div className='text-neutral-500'>
          Updated: <RelativeDate date={todo.updated} />
        </div>
      </div>
    </li>
  )
}
