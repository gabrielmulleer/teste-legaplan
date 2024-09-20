import { Button } from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import { useState, useTransition } from 'react'
import '../styles.scss'

interface AddTodoProps {
  children: React.ReactNode
  onAddTodo: (text: string) => Promise<void> | void
}

const AddTodo: React.FC<AddTodoProps> = ({ children, onAddTodo }) => {
  const [todoText, setTodoText] = useState('')
  const [isPending, startTransition] = useTransition()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (todoText.trim()) {
      startTransition(() => {
        onAddTodo(todoText)
        setTodoText('')
        setIsModalOpen(false)
      })
    }
  }

  return (
    <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Modal.Trigger>{children}</Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <h4 className="modal-title">Nova tarefa</h4>
        </Modal.Header>
        <form className="todo-form" onSubmit={handleSubmit}>
          <span>Título</span>
          <input
            className="todo-input"
            type="text"
            placeholder="Digite"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            required
          />

          <Modal.Footer>
            <Button type="submit" variant="primary" disabled={isPending}>
              {isPending ? 'Adicionando...' : 'Adicionar'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Content>
    </Modal>
  )
}

export default AddTodo
