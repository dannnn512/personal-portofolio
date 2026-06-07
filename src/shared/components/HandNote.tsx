type HandNoteProps = {
  children: React.ReactNode
  rotate?: number
  color?: string
  fontSize?: number
  maxWidth?: number
  style?: React.CSSProperties
}

export default function HandNote({
  children,
  rotate = 0,
  color = '#ffd84a',
  fontSize = 22,
  maxWidth,
  style,
}: HandNoteProps) {
  return (
    <span
      className="font-hand inline-block"
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
