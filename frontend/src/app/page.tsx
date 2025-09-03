import Test from '@/components/shared/Test'
import AddTodo from '@/components/todo/AddTodo'
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
      <Test />
      <div className='flex flex-col gap-4'>
        <h1 className='text-pink-500'>Todo List</h1>
        <AddTodo />

        <Suspense fallback={<div>Loading Todos...</div>}>
          <TodoList todos={todos} />
        </Suspense>
      </div>
    </>
  )
}
