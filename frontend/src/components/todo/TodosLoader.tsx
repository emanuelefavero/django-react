import { todoApiUrl } from '@/config/baseUrl'
import { TODOS_TAG } from '@/config/cacheTags'
import TodoList from './TodoList'

async function fetchTodos() {
  const response = await fetch(todoApiUrl, {
    cache: 'force-cache',
    next: { tags: [TODOS_TAG] },
  })
  if (!response.ok) throw new Error('Failed to fetch todos')

  return response.json()
}

export default async function TodosLoader() {
  const todos = await fetchTodos()

  if (!todos || todos.length === 0) return <div>No todos found</div>

  return <TodoList todos={todos} />
}
