import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    className?: string
  }
>

export function Button({
  children,
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 cursor-pointer'

  const variantClasses = {
    primary: 'bg-lime-500 text-slate-950 hover:bg-lime-400',
    secondary: 'bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20',
    ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
  }

    return (
      <button
        type={type}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </button>
    )
  }