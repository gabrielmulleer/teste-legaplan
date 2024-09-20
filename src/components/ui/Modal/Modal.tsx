import React, { useCallback, ReactNode, useContext } from 'react'
import './Modal.scss'
import { Button } from '../Button/Button'

interface ModalProps {
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface ModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined,
)

export const Modal: React.FC<ModalProps> & {
  Trigger: typeof ModalTrigger
  Content: typeof ModalContent
  Header: typeof ModalHeader
  Description: typeof ModalDescription
  Footer: typeof ModalFooter
} = ({ children, open, onOpenChange }) => {
  const openModal = useCallback(() => {
    onOpenChange(true)
  }, [onOpenChange])

  const closeModal = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  return (
    <ModalContext.Provider value={{ isOpen: open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('Component must be used within a Modal')
  return context
}

const ModalTrigger: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { openModal } = useModalContext()

  return (
    <div onClick={openModal} className="modal-trigger">
      {children}
    </div>
  )
}

const ModalContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, closeModal } = useModalContext()

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

const ModalHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="modal-header">{children}</div>
)

interface ModalFooterProps {
  children: ReactNode
}

const ModalDescription: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="modal-description">{children}</p>
)

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  const { closeModal } = useModalContext()

  return (
    <div className="modal-footer">
      <Button onClick={closeModal}>Cancelar</Button>
      {children}
    </div>
  )
}

Modal.Trigger = ModalTrigger
Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.Description = ModalDescription
Modal.Footer = ModalFooter

export default Modal
