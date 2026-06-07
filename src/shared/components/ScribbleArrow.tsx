type ScribbleArrowProps = {
  width?: number
  top?: number
  left?: number
  right?: number
  rotate?: number
  color?: string
  zIndex?: number
}

export default function ScribbleArrow({
  width = 120,
  top,
  left,
  right,
  rotate = 0,
  color = '#7df9c9',
  zIndex = 4,
}: ScribbleArrowProps) {
  return (
    <svg
      aria-hidden
      style={{
        position: 'absolute',
        top,
        left,
        right,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: 'none',
        zIndex,
      }}
      width={width}
      height={width * 0.6}
      viewBox="0 0 120 70"
    >
      <path
        d="M 5 35 C 30 10, 60 55, 90 30"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 80 22 L 95 28 L 85 40"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
