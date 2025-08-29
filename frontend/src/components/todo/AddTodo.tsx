import { addTodo } from '@/app/actions'
import Input from '@/components/shared/Input'
import SubmitButton from '@/components/shared/SubmitButton'
import { useId } from 'react'

// TODO Add useActionState for rendering `addTodo` action errors

export default function AddTodo() {
  const titleInputId = useId()

  return (
    <form action={addTodo} className='flex flex-wrap gap-2'>
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
      />
      <SubmitButton label='Add Todo' pendingLabel='Adding...' />
    </form>
  )
}
