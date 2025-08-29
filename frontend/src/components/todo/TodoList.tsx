import type { Todo } from '@/types/todo'

type Props = React.ComponentPropsWithRef<'ul'> & {
  todos: Todo[]
}

export default function TodoList({ todos, ...props }: Props) {
  return (
    <ul {...props}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>
            <span className='font-semibold'>{todo.title}</span>
          </div>
          <div className='text-gray-500'>Created: {todo.created}</div>
          <div className='text-gray-500'>Updated: {todo.updated}</div>
        </li>
      ))}
    </ul>
  )
}
