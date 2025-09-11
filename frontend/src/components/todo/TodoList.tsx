'use client'

import AnimatedList from '@/components/shared/AnimatedList'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'
import TodoItem from './TodoItem'

type Props = React.ComponentPropsWithRef<'ul'> & {
  todos: Todo[]
}

export default function TodoList({ todos, className, ...props }: Props) {
  return (
    <ul className={cn('flex max-w-sm flex-col gap-2', className)} {...props}>
      <AnimatedList
        items={todos}
        getKey={(todo) => todo.id}
        renderItem={(todo) => <TodoItem todo={todo} />}
      />
    </ul>
  )
}
