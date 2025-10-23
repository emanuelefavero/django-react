import { todoApiUrl } from '@/config/baseUrl'
import TodoList from './TodoList'

async function fetchTodos() {
  const response = await fetch(todoApiUrl)
  if (!response.ok) throw new Error('Failed to fetch todos')

  return response.json()
}

export default async function TodosLoader() {
  const todos = await fetchTodos()

  if (!todos || todos.length === 0) return <div>No todos found</div>

  return <TodoList todos={todos} />
}
