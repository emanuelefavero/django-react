'use server'

import { todoApiUrl } from '@/config/baseUrl'

// TODO move this file to app/actions/todo.ts

export async function addTodo(formData: FormData) {
  const title = formData.get('title')
  if (!title) throw new Error('Title is required')

  const response = await fetch(todoApiUrl, {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) throw new Error('Failed to add todo')

  return response.json()
}
