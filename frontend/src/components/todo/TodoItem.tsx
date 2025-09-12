'use client'

import { deleteTodo, toggleTodo, updateTodo } from '@/app/actions/todo'
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import RelativeDate from '@/components/shared/RelativeDate'
import { toast } from '@/lib/sonner'
import { cn } from '@/lib/utils'
import type { Todo } from '@/types/todo'
import { Save, SquarePen, Trash2 } from 'lucide-react'
import { useRef, useState } from 'react'

type Props = React.ComponentPropsWithRef<'li'> & {
  todo: Todo
}

// TODO color the delete button red
// TODO style the input edit field
// TODO make sure to justify buttons to the right when title is long
// TODO implement "Clear Completed" button to delete all completed todos

export default function TodoItem({ todo, className, ...props }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleToggle = async () => {
    const result = await toggleTodo(todo.id, !todo.completed)
    if (result?.error)
      toast.error(result.error, {
        cancel: {
          label: 'Dismiss',
          onClick: () => {},
        },
      })
  }

  const handleEdit = () => {
    setIsEditing(true)
    setEditValue(todo.title)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handleSaveEdit = async () => {
    // Validate non-empty title
    if (editValue.trim() === '') {
      toast.error('Title cannot be empty', {
        cancel: {
          label: 'Dismiss',
          onClick: () => {},
        },
      })
      return
    }

    // Update the todo if the title has changed
    if (editValue !== todo.title) {
      const result = await updateTodo(todo.id, editValue)
      if (result?.error) {
        toast.error(result.error, {
          cancel: {
            label: 'Dismiss',
            onClick: () => {},
          },
        })
        return
      }
    }

    setIsEditing(false) // Exit edit mode
  }

  const handleDelete = async () => {
    const result = await deleteTodo(todo.id)
    if (result?.error)
      toast.error(result.error, {
        cancel: {
          label: 'Dismiss',
          onClick: () => {},
        },
      })
  }

  return (
    <li
      className={cn(
        'flex flex-col flex-wrap overflow-hidden rounded-lg border border-border',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-2 border-b border-border bg-input px-3 py-2',
          todo.completed && 'bg-success',
        )}
      >
        <div className='font-semibold'>
          {/* Edit input field */}
          {isEditing ? (
            <Input
              ref={inputRef}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleSaveEdit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSaveEdit()
                if (e.key === 'Escape') setIsEditing(false)
              }}
            />
          ) : (
            todo.title
          )}
        </div>

        <div className='flex flex-wrap gap-2'>
          {/* Toggle */}
          <Button
            onClick={handleToggle}
            aria-label={
              todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'
            }
            title={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            className={cn(
              !todo.completed &&
                'border-muted-foreground text-muted-foreground hover:bg-muted-foreground',
              todo.completed &&
                'border-success-foreground text-success-foreground hover:bg-success-foreground',
            )}
          >
            ✔︎
          </Button>

          {/* Edit/Save */}
          {isEditing ? (
            <Button
              onClick={handleSaveEdit}
              aria-label='Save'
              title='Save'
              className='border-success-foreground text-success-foreground hover:bg-success-foreground'
            >
              <Save size={16} />
            </Button>
          ) : (
            <Button
              onClick={handleEdit}
              aria-label='Edit'
              title='Edit'
              className='border-danger-foreground text-danger-foreground hover:bg-danger-foreground'
            >
              <SquarePen size={16} />
            </Button>
          )}

          {/* Delete */}
          <Button
            onClick={handleDelete}
            aria-label='Delete'
            title='Delete'
            className='border-error-foreground text-error-foreground hover:bg-error-foreground'
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>

      <div className='px-3 py-2'>
        <div className='text-muted-foreground'>
          Created: <RelativeDate date={todo.created} />
        </div>
        <div className='text-muted-foreground'>
          Updated: <RelativeDate date={todo.updated} />
        </div>
      </div>
    </li>
  )
}
