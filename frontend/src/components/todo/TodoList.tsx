import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'
import TodoItem from './TodoItem'

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
