'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RouteGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const userName = localStorage.getItem('userName')
      if (!userName) {
        router.push('/')
      }
    }

    checkAuth()
  }, [router])

  return <>{children}</>
}

export default RouteGuard
