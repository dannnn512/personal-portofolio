type EyebrowProps = {
  children: React.ReactNode
  color?: string
  className?: string
}

export default function Eyebrow({ children, color = '#7df9c9', className = '' }: EyebrowProps) {
  return (
    <div
      className={`font-mono text-[13px] tracking-[0.2em] mb-4 ${className}`}
      style={{ color }}
    >
      {children}
    </div>
  )
}
