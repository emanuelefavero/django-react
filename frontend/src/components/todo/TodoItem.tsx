import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'

type Props = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

export default function TodoItem({ todo, className, ...props }: Props) {
  return (
    <li className={cn(className)} {...props}>
      <div>
        <span className='font-semibold'>{todo.title}</span>
      </div>
      <div className='text-gray-500'>Created: {todo.created}</div>
      <div className='text-gray-500'>Updated: {todo.updated}</div>
    </li>
  )
}
