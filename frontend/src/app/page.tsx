import AddTodo from '@/components/todo/AddTodo'
import TodosLoader from '@/components/todo/TodosLoader'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='text-primary'>Todo List</h1>
        <AddTodo />

        <Suspense fallback={<div>Loading Todos...</div>}>
          <TodosLoader />
        </Suspense>
      </div>
    </>
  )
}
