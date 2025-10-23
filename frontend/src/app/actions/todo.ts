'use server'

import { todoApiUrl } from '@/config/baseUrl'
import { TODOS_TAG } from '@/config/cacheTags'
import { revalidateTag } from 'next/cache'

// * Add todo
export async function addTodo(formData: FormData) {
  // return { error: 'Failed to add todo' }
  try {
    const title = formData.get('title')
    if (!title) return { error: 'Title is required' }

    const response = await fetch(`${todoApiUrl}/`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) return { error: 'Failed to add todo' }

    revalidateTag(TODOS_TAG)

    return response.json()
  } catch (err) {
    return { error: (err as Error).message }
  }
}

// * Toggle todo
export async function toggleTodo(id: number, completed: boolean) {
  try {
    const response = await fetch(`${todoApiUrl}/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify({ completed }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) return { error: 'Failed to toggle todo' }

    revalidateTag(TODOS_TAG)

    return response.json()
  } catch (err) {
    return { error: (err as Error).message }
  }
}

// * Delete todo
export async function deleteTodo(id: number) {
  try {
    const response = await fetch(`${todoApiUrl}/${id}/`, {
      method: 'DELETE',
    })

    if (!response.ok) return { error: 'Failed to delete todo' }

    revalidateTag(TODOS_TAG)

    if (response.status === 204) return null
    return response.json()
  } catch (err) {
    return { error: (err as Error).message }
  }
}

// * Update todo
export async function updateTodo(id: number, title: string) {
  try {
    const response = await fetch(`${todoApiUrl}/${id}/`, {
      method: 'PUT',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) return { error: 'Failed to update todo' }

    revalidateTag(TODOS_TAG)

    return response.json()
  } catch (err) {
    return { error: (err as Error).message }
  }
}
