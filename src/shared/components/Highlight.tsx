type HighlightProps = {
  children: React.ReactNode
  bgColor?: string
}

export default function Highlight({ children, bgColor = '#ff5a3c' }: HighlightProps) {
  return (
    <span
      className="px-2 box-decoration-clone"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </span>
  )
}
