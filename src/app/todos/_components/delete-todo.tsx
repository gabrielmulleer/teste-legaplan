import { Button } from '@/components/ui/Button/Button'
import Modal from '@/components/ui/Modal/Modal'
import React, { useState } from 'react'

interface DeleteTodoProps {
  children: React.ReactNode
  onDelete: () => void
}
const DeleteTodo: React.FC<DeleteTodoProps> = ({ children, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleDelete = () => {
    onDelete()
    setIsModalOpen(false)
  }
  return (
    <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Modal.Trigger>{children}</Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <h4>Deletar tarefa</h4>
        </Modal.Header>
        <Modal.Description>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
        </Modal.Description>
        <Modal.Footer>
          <Button onClick={handleDelete} variant="delete">
            Deletar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
export default DeleteTodo
