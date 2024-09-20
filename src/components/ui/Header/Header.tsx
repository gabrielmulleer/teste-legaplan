'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Header.scss'

const Header: React.FC = () => {
  const [userName, setUserName] = useState('')
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const savedUsername = localStorage.getItem('userName')
    if (savedUsername) {
      setUserName(savedUsername)
    }

    const date = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    setCurrentDate(date.toLocaleDateString('pt-BR', options))
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <Link href="/">
            <Image src="/_static/logo.png" width={150} height={36} alt="Logo" />
          </Link>
        </div>
        <div className="header-welcome">
          {userName ? `Bem-vindo de volta, ${userName}` : 'Bem-vindo'}
        </div>
        <div className="header-data">{currentDate}</div>
      </div>
    </header>
  )
}

export default Header
