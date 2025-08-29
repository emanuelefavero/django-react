import { addTodo } from '@/app/actions'

export default function AddTodo() {
  return (
    <form action={addTodo}>
      <input type='text' name='title' placeholder='Add a new todo' />
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  return <button type='submit'>Add Todo</button>
}
