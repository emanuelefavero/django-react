import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'

type Props = React.ComponentPropsWithRef<'ul'> & {
  todos: Todo[]
}

export default function TodoList({ todos, className, ...props }: Props) {
  return (
    <ul className={cn(className)} {...props}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

type TodoItemProps = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

function TodoItem({ todo, className, ...props }: TodoItemProps) {
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
