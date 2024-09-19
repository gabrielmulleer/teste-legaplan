import * as React from 'react'
import './Button.scss' // Supondo que o estilo SCSS esteja aqui

// Definindo as variantes como tipos
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'delete' | 'default'
  size?: 'sm' | 'lg' | 'default'
  rounded?: 'sm' | 'lg' | 'xl' | 'full' | 'default'
}

// Componente Button com forwardRef
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'lg',
      rounded = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    const variantClass = `btn-${variant}`
    const sizeClass = `btn-size-${size}`
    const roundedClass = `btn-rounded-${rounded}`

    return (
      <button
        className={`btn ${variantClass} ${sizeClass} ${roundedClass} ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
