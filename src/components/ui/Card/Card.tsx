import * as React from 'react'
import './Card.scss'
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>
}
export function CardContainer({ children }: { children: React.ReactNode }) {
  return <div className="card-container">{children}</div>
}
