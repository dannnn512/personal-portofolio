type HandNoteProps = {
  children: React.ReactNode
  rotate?: number
  color?: string
  fontSize?: number
  maxWidth?: number
  style?: React.CSSProperties
  className?: string
}

export default function HandNote({
  children,
  rotate = 0,
  color = '#ffd84a',
  fontSize = 22,
  maxWidth,
  style,
  className = '',
}: HandNoteProps) {
  return (
    <span
      className={`font-hand inline-block ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        color,
        fontSize,
        lineHeight: 1.1,
        maxWidth,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
