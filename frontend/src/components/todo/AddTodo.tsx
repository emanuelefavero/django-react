import { addTodo } from '@/app/actions'
import SubmitButton from '@/components/shared/SubmitButton'

export default function AddTodo() {
  return (
    <form action={addTodo}>
      <input type='text' name='title' placeholder='Add a new todo' required />
      <SubmitButton label='Add Todo' pendingLabel='Adding...' />
    </form>
  )
}
