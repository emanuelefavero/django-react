import { todoApiUrl } from '@/config/baseUrl'
import type { Todo } from '@/types/todo'
import { Suspense } from 'react'

async function fetchTodos() {
  const response = await fetch(todoApiUrl)
  if (!response.ok) throw new Error('Failed to fetch todos')

  return response.json()
}

export default async function Home() {
  const todos = await fetchTodos()

  return (
    <>
      <h1 className='text-pink-500'>Hello</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              <div>
                {todo.id} - <span className='font-semibold'>{todo.title}</span>
              </div>
              <div className='text-gray-500'>Created: {todo.created}</div>
              <div className='text-gray-500'>Updated: {todo.updated}</div>
            </li>
          ))}
        </ul>
      </Suspense>
    </>
  )
}
