import { Link } from 'react-router-dom'
import { cn } from '@/shared/utils/cn'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary-electric' | 'primary-hot' | 'secondary'
  size?: 'md' | 'lg'
  href?: string
}

export default function Button({
  variant = 'primary-electric',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    'font-display font-bold uppercase cursor-pointer transition-colors duration-150 inline-flex items-center justify-center'

  const variants = {
    'primary-electric': 'bg-electric text-ink hover:bg-[#a0fbd4] border-0',
    'primary-hot': 'bg-hot text-cream hover:bg-[#ff7a62] border-0',
    secondary: 'bg-transparent text-cream border-2 border-cream hover:bg-cream/10',
  }

  const sizes = {
    md: 'px-7 py-5 text-[16px] tracking-[0.02em]',
    lg: 'px-8 py-[22px] text-[18px] tracking-[0.04em] font-extrabold',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    const isInternal = href.startsWith('/') && !href.startsWith('//')
    if (isInternal) {
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
