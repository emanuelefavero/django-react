'use client'

import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'

type Props<T> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  getKey: (item: T) => string | number
  motionProps?: React.ComponentProps<typeof motion.div>
}

/**
 * A reusable animated component using Framer Motion that adds entry and exit animations for list items
 *
 * @remarks
 * TIP: Modify the motion.div props below to customize animations
 * TIP: You can also pass motionProps to override/add motion props
 * NOTE: Make sure to add the `"use client"` directive at the top of the file when using this component
 *
 * @see https://motion.dev/docs/react-animate-presence
 *
 * @example
 * // Usage
 * "use client"
 *
 * <AnimatedList
 *   items={todos} // The array of items to render
 *   getKey={(todo) => todo.id} // Get a unique key for each item
 *   renderItem={(todo) => <TodoItem todo={todo} />} // Render each item
 * />
 */

export default function AnimatedList<T>({
  items,
  renderItem,
  getKey,
  motionProps,
}: Props<T>) {
  return (
    <AnimatePresence>
      {items.map((item) => (
        <motion.div
          key={getKey(item)}
          layout // Adds auto animations for layout changes
          initial={{ opacity: 0, y: -24 }} // Entry animation
          animate={{ opacity: 1, y: 0 }} // Animate to (visible state)
          exit={{ opacity: 0, y: 24 }} // Exit animation
          transition={{ duration: 0.2 }} // Animation duration
          {...motionProps}
        >
          {renderItem(item)}
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
