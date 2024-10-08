'use client'

import React from 'react'
import './TodoItem.scss'
import DeleteTodo from '@/app/todos/_components/delete-todo'

interface TodoItemProps {
  children: React.ReactNode
  isCompleted: boolean
  onToggle: () => void
  onDelete: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({
  children,
  isCompleted,
  onToggle,
  onDelete,
}) => {
  return (
    <div className={`${`todoItem`} ${isCompleted ? `completed` : ''}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className={`checkbox`}
      />
      <span className={`text`}>{children}</span>
      <DeleteTodo onDelete={onDelete}>
        <button className={`deleteButton`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </DeleteTodo>
    </div>
  )
}

export default TodoItem
