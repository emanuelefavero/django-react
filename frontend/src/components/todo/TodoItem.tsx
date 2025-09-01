'use client'

import { deleteTodo } from '@/app/actions'
import Button from '@/components/shared/Button'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'

type Props = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

export default function TodoItem({ todo, className, ...props }: Props) {
  return (
    <li className={cn(className)} {...props}>
      <div className='flex flex-wrap items-center'>
        <div className='font-semibold'>{todo.title}</div>
        <Button onClick={() => deleteTodo(todo.id)} className='ml-2'>
          Delete
        </Button>
      </div>
      <div className='text-gray-500'>Created: {todo.created}</div>
      <div className='text-gray-500'>Updated: {todo.updated}</div>
    </li>
  )
}
