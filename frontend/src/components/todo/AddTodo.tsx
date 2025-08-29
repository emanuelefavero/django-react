import { addTodo } from '@/app/actions'
import Input from '@/components/shared/Input'
import SubmitButton from '@/components/shared/SubmitButton'
import { useId } from 'react'

export default function AddTodo() {
  const titleInputId = useId()

  return (
    <form action={addTodo}>
      <label htmlFor={titleInputId} className='sr-only'>
        Title
      </label>
      <Input
        id={titleInputId}
        type='text'
        name='title'
        placeholder='Add a new todo'
        required
      />
      <SubmitButton label='Add Todo' pendingLabel='Adding...' />
    </form>
  )
}
