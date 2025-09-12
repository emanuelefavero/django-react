'use server'

import { todoApiUrl } from '@/config/baseUrl'
import { revalidatePath } from 'next/cache'

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

    revalidatePath('/')

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

    revalidatePath('/')

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

    revalidatePath('/')

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

    revalidatePath('/')

    return response.json()
  } catch (err) {
    return { error: (err as Error).message }
  }
}
