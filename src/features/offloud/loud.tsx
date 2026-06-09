import type { CSSProperties } from 'react'

type LoudBoxProps = {
  color?: string
  width?: number
  dashed?: boolean
  opacity?: number
}

export function LoudBox({
  color = 'var(--line)',
  width = 2.4,
  dashed = false,
  opacity = 1,
}: LoudBoxProps) {
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none', opacity }}
    >
      <rect
        x={2}
        y={2}
        width="calc(100% - 4px)"
        height="calc(100% - 4px)"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dashed ? '8 10' : undefined}
        filter="url(#loud-edge)"
      />
    </svg>
  )
}

type SvgProps = { color?: string; style?: CSSProperties }

export function LoudSlash({ color = 'var(--accent)', style }: SvgProps) {
  return (
    <svg
      viewBox="0 0 60 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ overflow: 'visible', ...style }}
    >
      <path
        d="M50 6 C 43 30, 28 66, 12 114"
        stroke={color}
        strokeWidth={14}
        strokeLinecap="round"
        fill="none"
        filter="url(#loud-rough)"
      />
    </svg>
  )
}

export function LoudUnderline({ color = 'var(--accent)' }: { color?: string }) {
  return (
    <svg viewBox="0 0 240 18" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 11 Q 60 4 120 9 T 237 7"
        stroke={color}
        strokeWidth={7}
        fill="none"
        strokeLinecap="round"
        filter="url(#loud-rough)"
      />
    </svg>
  )
}

export function LoudBurst({ color = 'var(--cream)', style }: SvgProps) {
  const N = 18
  const rays = []
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2
    const r1 = 44
    const r2 = i % 2 === 0 ? 116 : 96
    rays.push(
      <line
        key={i}
        x1={120 + Math.cos(a) * r1}
        y1={120 + Math.sin(a) * r1}
        x2={120 + Math.cos(a) * r2}
        y2={120 + Math.sin(a) * r2}
        stroke={color}
        strokeWidth={i % 2 === 0 ? 6 : 3.5}
        strokeLinecap="round"
      />
    )
  }
  return (
    <svg
      viewBox="0 0 240 240"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{ overflow: 'visible', ...style }}
    >
      <g filter="url(#loud-bold)">
        {rays}
        <circle cx={120} cy={120} r={30} fill="none" stroke={color} strokeWidth={6} />
      </g>
    </svg>
  )
}
