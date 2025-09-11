'use client'

import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
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
            layout // Adds auto animations for layout changes
            initial={{ opacity: 0, y: -24 }} // Entry animation
            animate={{ opacity: 1, y: 0 }} // Animate to (visible state)
            exit={{ opacity: 0, y: 24 }} // Exit animation
            transition={{ duration: 0.2 }} // Animation duration
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  )
}
