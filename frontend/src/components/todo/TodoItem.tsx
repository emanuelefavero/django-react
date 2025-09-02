'use client'

import { deleteTodo, toggleTodo } from '@/app/actions'
import Button from '@/components/shared/Button'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'

// TODO add todo item style (card item bg color based on completion status)
// TODO use the created and updated fields to show the date in human friendly format (e.g. 1 hour ago), check that updated is more recent, use libraries like date-fns or dayjs

type Props = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

export default function TodoItem({ todo, className, ...props }: Props) {
  return (
    <li className={cn(className)} {...props}>
      <div className='flex flex-wrap items-center justify-between'>
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
      <div className='text-neutral-500'>Created: {todo.created}</div>
      <div className='text-neutral-500'>Updated: {todo.updated}</div>
    </li>
  )
}
