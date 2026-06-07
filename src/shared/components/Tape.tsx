type TapeProps = {
  width?: number
  top?: number | string
  left?: number | string
  rotate?: number
  color?: string
  zIndex?: number
}

export default function Tape({
  width = 80,
  top = -10,
  left = '50%',
  rotate = -8,
  color = '#ffd84a',
  zIndex = 6,
}: TapeProps) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height: 24,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        background: color,
        opacity: 0.88,
        boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.06) 4px, rgba(0,0,0,0.06) 5px)',
        zIndex,
      }}
    />
  )
}
