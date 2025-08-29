import TodoList from '@/components/todo/TodoList'
import { todoApiUrl } from '@/config/baseUrl'
import { Suspense } from 'react'

async function fetchTodos() {
  const response = await fetch(todoApiUrl)
  if (!response.ok) throw new Error('Failed to fetch todos')

  return response.json()
}

export default async function Home() {
  const todos = await fetchTodos()

  if (!todos || todos.length === 0) return <div>No todos found</div>

  return (
    <>
      <h1 className='text-pink-500'>Todo List</h1>

      <Suspense fallback={<div>Loading Todos...</div>}>
        <TodoList todos={todos} />
      </Suspense>
    </>
  )
}
