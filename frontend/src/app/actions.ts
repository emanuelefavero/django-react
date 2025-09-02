'use server'

import { todoApiUrl } from '@/config/baseUrl'
import { revalidatePath } from 'next/cache'

// TODO move this file to app/actions/todo.ts

// * Add todo
export async function addTodo(formData: FormData) {
  const title = formData.get('title')
  if (!title) throw new Error('Title is required')

  const response = await fetch(`${todoApiUrl}/`, {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) throw new Error('Failed to add todo')

  revalidatePath('/')

  return response.json()
}

// * Toggle todo
export async function toggleTodo(id: number, completed: boolean) {
  const response = await fetch(`${todoApiUrl}/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) throw new Error('Failed to toggle todo')

  revalidatePath('/')

  return response.json()
}

// * Delete todo
export async function deleteTodo(id: number) {
  const response = await fetch(`${todoApiUrl}/${id}/`, {
    method: 'DELETE',
  })

  if (!response.ok) throw new Error('Failed to delete todo')

  revalidatePath('/')

  // 204 No Content: do not attempt to parse JSON
  if (response.status === 204) return null
  return response.json()
}
