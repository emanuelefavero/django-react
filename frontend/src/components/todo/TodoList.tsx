import type { Todo } from '@/types/todo'

type TodoItemProps = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <div>
        <span className='font-semibold'>{todo.title}</span>
      </div>
      <div className='text-gray-500'>Created: {todo.created}</div>
      <div className='text-gray-500'>Updated: {todo.updated}</div>
    </li>
  )
}

type Props = React.ComponentPropsWithRef<'ul'> & {
  todos: Todo[]
}

export default function TodoList({ todos, ...props }: Props) {
  return (
    <ul {...props}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
