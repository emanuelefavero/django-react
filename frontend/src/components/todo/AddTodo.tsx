'use client'

import { addTodo } from '@/app/actions/todo'
import Input from '@/components/shared/Input'
import SubmitButton from '@/components/shared/SubmitButton'
import { toast } from '@/lib/sonner'
import { useActionState, useId } from 'react'

type InitialState = { title?: string; error?: string }

async function action(_: InitialState, formData: FormData) {
  const response = await addTodo(formData)

  if (response.error) {
    toast.error(response.error, {
      cancel: {
        label: 'Dismiss',
        onClick: () => {},
      },
    })
  }

  // TIP: You can also show a success toast here if response.title is defined
  // if (response.title) {
  //   toast.success(`New todo added!`, {
  //     description: response.title,
  //     action: {
  //       label: 'Dismiss',
  //       onClick: () => {},
  //     },
  //   })
  // }

  return response
}

const initialState = { error: null }

export default function AddTodo() {
  const titleInputId = useId()
  const [, formAction, isPending] = useActionState(action, initialState)

  return (
    <form action={formAction} className='flex flex-wrap gap-2'>
      <label htmlFor={titleInputId} className='sr-only'>
        Title
      </label>
      <Input
        id={titleInputId}
        type='text'
        name='title'
        placeholder='Add a new todo'
        required
        maxLength={100}
        minLength={3}
        inputMode='text'
        enterKeyHint='done'
        autoComplete='off'
        pattern='^(?=[^<>]*\S)[^<>]*$'
        // defaultValue={state.title}
      />
      <SubmitButton
        label={isPending ? 'Adding...' : 'Add Todo'}
        className='min-w-24'
      />
    </form>
  )
}
