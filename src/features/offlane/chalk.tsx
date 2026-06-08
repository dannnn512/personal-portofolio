import type { CSSProperties } from 'react'

type ChalkBoxProps = {
  color?: string
  width?: number
  dashed?: boolean
  soft?: boolean
  opacity?: number
}

export function ChalkBox({
  color = 'var(--line)',
  width = 2,
  dashed = false,
  soft = false,
  opacity = 1,
}: ChalkBoxProps) {
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity }}
    >
      <rect
        x={1.5}
        y={1.5}
        width="calc(100% - 3px)"
        height="calc(100% - 3px)"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dashed ? '7 9' : undefined}
        filter={`url(#${soft ? 'chalk-edge-soft' : 'chalk-edge'})`}
      />
    </svg>
  )
}

type SvgProps = { color?: string; style?: CSSProperties }

export function ChalkSlash({ color = 'var(--accent)', style }: SvgProps) {
  return (
    <svg
      viewBox="0 0 60 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ overflow: 'visible', ...style }}
    >
      <path
        d="M50 8 C 44 30, 30 64, 14 112"
        stroke={color}
        strokeWidth={11}
        strokeLinecap="round"
        fill="none"
        filter="url(#chalk-rough)"
      />
    </svg>
  )
}

export function ChalkUnderline({ color = 'var(--accent)' }: { color?: string }) {
  return (
    <svg viewBox="0 0 240 16" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 9 Q 60 4 120 8 T 237 6"
        stroke={color}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
        filter="url(#chalk-rough)"
      />
    </svg>
  )
}

export function ChalkSwirl({ color = 'var(--cream)', style }: SvgProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{ overflow: 'visible', ...style }}
    >
      <path
        d="M 36 150 C 16 92, 66 36, 128 42 C 198 48, 220 132, 162 172 C 114 205, 58 172, 70 120 C 80 80, 134 74, 144 116 C 150 141, 124 154, 110 138"
        fill="none"
        stroke={color}
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#chalk-bold)"
      />
    </svg>
  )
}
