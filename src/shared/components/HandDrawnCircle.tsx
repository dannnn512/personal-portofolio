type HandDrawnCircleProps = {
  size?: number
  top?: number
  left?: number
  right?: number
  color?: string
  strokeWidth?: number
  zIndex?: number
}

export default function HandDrawnCircle({
  size = 220,
  top,
  left,
  right,
  color = '#ff5a3c',
  strokeWidth = 3,
  zIndex = 4,
}: HandDrawnCircleProps) {
  return (
    <svg
      aria-hidden
      style={{
        position: 'absolute',
        top,
        left,
        right,
        pointerEvents: 'none',
        zIndex,
      }}
      width={size}
      height={size * 0.6}
      viewBox="0 0 200 120"
    >
      <ellipse
        cx="100"
        cy="60"
        rx="92"
        ry="50"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="200 30"
      />
    </svg>
  )
}
