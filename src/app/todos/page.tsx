'use client'
import { Button } from '@/components/ui/Button/Button'
import './styles.scss'
import TodoItem from '@/components/ui/TodoItem/TodoItem'
import { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}
export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Fazer um bolo', completed: false },
    { id: 2, text: 'Lavar a louça', completed: false },
    { id: 3, text: 'Levar o lixo para fora', completed: true },
  ])

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
      <h1>My Todo List</h1>
      <Button variant="primary">Add Todo</Button>
      <Button>Cancel</Button>
      <Button variant="delete">Delete</Button>
      <div>
        <h1>Todo List</h1>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            isCompleted={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          >
            {todo.text}
          </TodoItem>
        ))}
      </div>
    </div>
  )
}
