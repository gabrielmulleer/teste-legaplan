'use client'
import { Button } from '@/components/ui/Button/Button'
import './styles.scss'
import TodoItem from '@/components/ui/TodoItem/TodoItem'
import { Card, CardContainer } from '@/components/ui/Card/Card'

import AddTodo from './_components/add-todo'
import { useTodos } from '@/hooks/useTodos'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Todos() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [])

  const incompleteTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  if (loading) {
    return (
      <div className="loading">
        <span>Carregando tarefas...</span>
        <Image
          src="/assets/animations/bean-eater-loading.svg"
          width={80}
          height={80}
          alt="Loading"
        />
      </div>
    )
  }
  return (
    <div className="todos-container">
      <Card>
        <h4 className="card-title">Suas tarefas de hoje</h4>
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
            <h4 className="card-title">Tarefas finalizadas</h4>
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
      <AddTodo onAddTodo={addTodo}>
        <Button variant="primary">Adicionar nova tarefa</Button>
      </AddTodo>
    </div>
  )
}
