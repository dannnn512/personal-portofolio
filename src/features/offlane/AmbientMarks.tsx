type MarkType =
  | 'arrowCurve'
  | 'arrowStraight'
  | 'scribble'
  | 'crossBox'
  | 'erased'
  | 'circle'
  | 'strike'
  | 'tally'
  | 'check'
  | 'xmark'
  | 'underline'
  | 'bracket'
  | 'star'

function Mark({ type, c = 'var(--line)' }: { type: MarkType; c?: string }) {
  const p = {
    fill: 'none',
    stroke: c,
    strokeWidth: 2.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    filter: 'url(#chalk-edge)',
  }
  switch (type) {
    case 'arrowCurve':
      return (
        <svg viewBox="0 0 96 44" width={96} height={44}>
          <path d="M3 30 C 22 6, 52 40, 84 12" {...p} />
          <path d="M71 7 L88 11 L75 25" {...p} />
        </svg>
      )
    case 'arrowStraight':
      return (
        <svg viewBox="0 0 110 30" width={110} height={30}>
          <path d="M3 16 L100 13" {...p} />
          <path d="M86 4 L103 13 L86 23" {...p} />
        </svg>
      )
    case 'scribble':
      return (
        <svg viewBox="0 0 110 38" width={110} height={38}>
          <path
            d="M3 20 C 12 3, 26 4, 27 19 C 28 33, 44 33, 50 19 C 56 6, 72 5, 76 20 C 80 34, 96 32, 106 17"
            {...p}
          />
        </svg>
      )
    case 'crossBox':
      return (
        <svg viewBox="0 0 92 60" width={92} height={60}>
          <path d="M5 6 L86 4 L88 54 L4 56 Z" {...p} />
          <path d="M6 7 L86 53" {...p} strokeWidth={1.8} />
          <path d="M86 7 L6 53" {...p} strokeWidth={1.8} />
        </svg>
      )
    case 'erased':
      return (
        <svg viewBox="0 0 150 50" width={150} height={50}>
          <path
            d="M6 16 C 50 10, 100 22, 144 13"
            stroke={c}
            strokeWidth={11}
            fill="none"
            strokeLinecap="round"
            filter="url(#chalk-rough)"
            opacity={0.6}
          />
          <path
            d="M10 30 C 60 24, 110 36, 140 27"
            stroke={c}
            strokeWidth={9}
            fill="none"
            strokeLinecap="round"
            filter="url(#chalk-rough)"
            opacity={0.45}
          />
        </svg>
      )
    case 'circle':
      return (
        <svg viewBox="0 0 120 86" width={120} height={86}>
          <path
            d="M60 6 C 16 8, 6 38, 16 60 C 28 84, 96 84, 110 56 C 120 34, 100 8, 54 9"
            {...p}
            strokeWidth={2.6}
          />
        </svg>
      )
    case 'strike':
      return (
        <svg viewBox="0 0 90 56" width={90} height={56}>
          <path d="M6 50 L82 8" {...p} />
          <path d="M14 52 L86 14" {...p} strokeWidth={1.8} />
          <path d="M4 40 L70 4" {...p} strokeWidth={1.8} />
        </svg>
      )
    case 'tally':
      return (
        <svg viewBox="0 0 60 44" width={60} height={44}>
          <path d="M8 6 L7 38" {...p} />
          <path d="M20 6 L19 38" {...p} />
          <path d="M32 6 L31 38" {...p} />
          <path d="M44 6 L43 38" {...p} />
          <path d="M2 30 L52 12" {...p} strokeWidth={2.1} />
        </svg>
      )
    case 'check':
      return (
        <svg viewBox="0 0 48 36" width={48} height={36}>
          <path d="M4 18 L17 31 L44 4" {...p} strokeWidth={2.8} />
        </svg>
      )
    case 'xmark':
      return (
        <svg viewBox="0 0 40 40" width={40} height={40}>
          <path d="M6 6 L34 34" {...p} strokeWidth={2.6} />
          <path d="M34 6 L6 34" {...p} strokeWidth={2.6} />
        </svg>
      )
    case 'underline':
      return (
        <svg viewBox="0 0 130 24" width={130} height={24}>
          <path d="M4 9 C 40 3, 88 5, 126 8" {...p} />
          <path d="M6 17 C 44 12, 90 14, 124 16" {...p} strokeWidth={1.8} />
        </svg>
      )
    case 'bracket':
      return (
        <svg viewBox="0 0 40 90" width={40} height={90}>
          <path d="M30 5 C 10 8, 8 40, 9 45 C 8 50, 10 82, 30 85" {...p} strokeWidth={2.4} />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 46 46" width={46} height={46}>
          <path
            d="M23 5 L23 41 M6 23 L40 23 M11 11 L35 35 M35 11 L11 35"
            {...p}
            strokeWidth={1.9}
          />
        </svg>
      )
  }
}

type MarkConfig = {
  type: MarkType
  top: string
  left: string
  rot: number
  s?: number
  c?: string
  op?: number
}

const MARKS: MarkConfig[] = [
  { type: 'tally', top: '11%', left: '4%', rot: -4, s: 1 },
  { type: 'erased', top: '20%', left: '70%', rot: -3, s: 1.1 },
  { type: 'arrowStraight', top: '24%', left: '2%', rot: 9, s: 1, c: 'var(--hot)', op: 0.45 },
  { type: 'crossBox', top: '28%', left: '84%', rot: -6, s: 1 },
  { type: 'strike', top: '31%', left: '8%', rot: 3, s: 0.9 },
  { type: 'underline', top: '34%', left: '74%', rot: -2, s: 1, c: 'var(--electric)', op: 0.5 },
  { type: 'scribble', top: '38%', left: '90%', rot: -10, s: 1.1 },
  { type: 'check', top: '41%', left: '3%', rot: -7, s: 1.1, c: 'var(--yellow)', op: 0.55 },
  { type: 'arrowCurve', top: '45%', left: '80%', rot: 14, s: 0.9 },
  { type: 'bracket', top: '48%', left: '95%', rot: 0, s: 1.2 },
  { type: 'tally', top: '52%', left: '88%', rot: 5, s: 0.9 },
  { type: 'star', top: '49%', left: '6%', rot: 8, s: 1, op: 0.7 },
  { type: 'erased', top: '57%', left: '4%', rot: 4, s: 1.2 },
  { type: 'crossBox', top: '61%', left: '76%', rot: 7, s: 0.85 },
  { type: 'scribble', top: '64%', left: '92%', rot: -5, s: 1 },
  { type: 'arrowStraight', top: '67%', left: '70%', rot: -12, s: 0.95, c: 'var(--hot)', op: 0.4 },
  { type: 'xmark', top: '70%', left: '10%', rot: -3, s: 0.9 },
  { type: 'circle', top: '73%', left: '82%', rot: -8, s: 1.1 },
  { type: 'underline', top: '76%', left: '5%', rot: 2, s: 1.1 },
  { type: 'strike', top: '80%', left: '90%', rot: -6, s: 1 },
  { type: 'arrowCurve', top: '84%', left: '7%', rot: 20, s: 1, c: 'var(--electric)', op: 0.45 },
  { type: 'tally', top: '87%', left: '78%', rot: -4, s: 0.95 },
  { type: 'scribble', top: '90%', left: '40%', rot: 3, s: 0.9, op: 0.5 },
  { type: 'erased', top: '94%', left: '84%', rot: -2, s: 1.1 },
  { type: 'check', top: '93%', left: '12%', rot: 6, s: 1, c: 'var(--yellow)', op: 0.5 },
  { type: 'bracket', top: '22%', left: '0%', rot: 180, s: 1 },
]

export default function AmbientMarks() {
  return (
    <div className="chalk-marks" aria-hidden="true">
      {MARKS.map((m, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: m.top,
            left: m.left,
            transform: `rotate(${m.rot}deg) scale(${m.s ?? 1})`,
            transformOrigin: 'center',
            opacity: m.op ?? 1,
          }}
        >
          <Mark type={m.type} c={m.c ?? 'var(--line)'} />
        </div>
      ))}
    </div>
  )
}
