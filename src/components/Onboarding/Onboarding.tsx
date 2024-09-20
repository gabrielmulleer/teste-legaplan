'use client'
import { useState, useEffect } from 'react'

import './Onboarding.scss'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/Button/Button'

const Onboarding: React.FC = () => {
  const [name, setName] = useState('')
  const router = useRouter()

  useEffect(() => {
    const storedName = localStorage.getItem('userName')
    if (storedName) {
      router.push('/todos')
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem('userName', name.trim())
      router.push('/todos')
    }
  }

  return (
    <div className={'onboarding'}>
      <h1>Bem-vindo!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
          className="onboarding-input"
          required
        />
        <Button variant="primary" type="submit">
          Continuar
        </Button>
      </form>
    </div>
  )
}

export default Onboarding
