'use client'

import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'none'
  textColor?: string
  icon?: React.ReactNode
  type?: 'button' | 'submit'
  className?: string
}

const Button = ({
  children,
  href,
  onClick,
  fullWidth = false,
  variant = 'primary',
  textColor = 'text-white',
  icon,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseStyles = 'text-sm p-3 rounded inline-flex items-center justify-center gap-2 transition-all cursor-pointer'

  const variantStyles: Record<string, string> = {
    primary: 'bg-primary-500 hover:bg-primary-600',
    secondary: 'bg-secondary-500 hover:bg-secondary-600',
    danger: 'bg-red-500 hover:bg-red-600',
    none: '',
  }

  const fullWidthClass = fullWidth ? 'w-full' : ''

  const finalClass = [
    baseStyles,
    variantStyles[variant],
    textColor,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {icon && <span>{icon}</span>}
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={finalClass}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}

export default Button
