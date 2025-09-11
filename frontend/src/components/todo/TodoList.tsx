'use client'

import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'
import { AnimatePresence, motion } from 'motion/react'
import TodoItem from './TodoItem'

type Props = React.ComponentPropsWithRef<'ul'> & {
  todos: Todo[]
}

export default function TodoList({ todos, className, ...props }: Props) {
  return (
    <ul className={cn('flex max-w-sm flex-col gap-2', className)} {...props}>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.2 }}
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  )
}
