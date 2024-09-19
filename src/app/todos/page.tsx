'use client'
import { Button } from '@/components/ui/Button/Button'
import './styles.scss'
import TodoItem from '@/components/ui/TodoItem/TodoItem'
import { useState } from 'react'
import { Card, CardContainer } from '@/components/ui/Card/Card'

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

  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <div>
      <h1>My Todo List</h1>
      <Button variant="primary">Add Todo</Button>
      <Button>Cancel</Button>
      <Button variant="delete">Delete</Button>
      <Card>
        <h4>Suas tarefas de hoje</h4>
        <CardContainer>
          {incompleteTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              isCompleted={todo.completed}
              onToggle={() => toggleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            >
              {todo.text}
            </TodoItem>
          ))}
        </CardContainer>

        {completedTodos.length > 0 && (
          <>
            <h4>Tarefas finalizadas</h4>
            <CardContainer>
              {completedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  isCompleted={todo.completed}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                >
                  {todo.text}
                </TodoItem>
              ))}
            </CardContainer>
          </>
        )}
      </Card>
    </div>
  )
}
