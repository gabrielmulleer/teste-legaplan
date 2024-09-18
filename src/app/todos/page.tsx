import { Button } from '@/components/ui/Button/button'
import './styles.scss'

export default function Todos() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Button variant="primary">Add Todo</Button>
      <Button>Cancel</Button>
      <Button variant="delete">Delete</Button>
    </div>
  )
}
