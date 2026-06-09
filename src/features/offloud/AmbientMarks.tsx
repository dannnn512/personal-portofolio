type MarkType =
  | 'arrowCurve'
  | 'arrowStraight'
  | 'scribble'
  | 'crossBox'
  | 'strike'
  | 'tally'
  | 'star'
  | 'bolt'
  | 'circle'
  | 'underline'
  | 'bracket'

function Mark({ type, c = 'var(--line)' }: { type: MarkType; c?: string }) {
  const p = {
    fill: 'none',
    stroke: c,
    strokeWidth: 2.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    filter: 'url(#loud-edge)',
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
          <path d="M6 7 L86 53" {...p} strokeWidth={2} />
          <path d="M86 7 L6 53" {...p} strokeWidth={2} />
        </svg>
      )
    case 'strike':
      return (
        <svg viewBox="0 0 90 56" width={90} height={56}>
          <path d="M6 50 L82 8" {...p} />
          <path d="M14 52 L86 14" {...p} strokeWidth={2} />
          <path d="M4 40 L70 4" {...p} strokeWidth={2} />
        </svg>
      )
    case 'tally':
      return (
        <svg viewBox="0 0 60 44" width={60} height={44}>
          <path d="M8 6 L7 38" {...p} />
          <path d="M20 6 L19 38" {...p} />
          <path d="M32 6 L31 38" {...p} />
          <path d="M44 6 L43 38" {...p} />
          <path d="M2 30 L52 12" {...p} strokeWidth={2.4} />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 46 46" width={46} height={46}>
          <path
            d="M23 5 L23 41 M6 23 L40 23 M11 11 L35 35 M35 11 L11 35"
            {...p}
            strokeWidth={2.2}
          />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 40 64" width={40} height={64}>
          <path d="M24 4 L8 36 L20 36 L14 60 L34 24 L21 24 Z" {...p} strokeWidth={2.4} />
        </svg>
      )
    case 'circle':
      return (
        <svg viewBox="0 0 120 86" width={120} height={86}>
          <path
            d="M60 6 C 16 8, 6 38, 16 60 C 28 84, 96 84, 110 56 C 120 34, 100 8, 54 9"
            {...p}
            strokeWidth={3}
          />
        </svg>
      )
    case 'underline':
      return (
        <svg viewBox="0 0 130 24" width={130} height={24}>
          <path d="M4 9 C 40 3, 88 5, 126 8" {...p} />
          <path d="M6 17 C 44 12, 90 14, 124 16" {...p} strokeWidth={2} />
        </svg>
      )
    case 'bracket':
      return (
        <svg viewBox="0 0 40 90" width={40} height={90}>
          <path d="M30 5 C 10 8, 8 40, 9 45 C 8 50, 10 82, 30 85" {...p} strokeWidth={2.8} />
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

const LOUD_MARKS: MarkConfig[] = [
  { type: 'bolt', top: '14%', left: '3%', rot: -8, s: 1.1, c: 'var(--accent)', op: 0.5 },
  { type: 'tally', top: '12%', left: '84%', rot: 4, s: 1 },
  { type: 'strike', top: '27%', left: '6%', rot: 3, s: 1 },
  { type: 'star', top: '23%', left: '90%', rot: 10, s: 1.2, op: 0.7 },
  { type: 'arrowStraight', top: '36%', left: '1%', rot: 8, s: 1, c: 'var(--electric)', op: 0.4 },
  { type: 'crossBox', top: '40%', left: '92%', rot: -6, s: 1 },
  { type: 'scribble', top: '47%', left: '4%', rot: -6, s: 1.1 },
  { type: 'bracket', top: '44%', left: '97%', rot: 180, s: 1.1 },
  { type: 'bolt', top: '56%', left: '93%', rot: 12, s: 1, c: 'var(--yellow)', op: 0.5 },
  { type: 'circle', top: '60%', left: '2%', rot: -4, s: 1.1 },
  { type: 'arrowCurve', top: '68%', left: '88%', rot: 16, s: 1, c: 'var(--electric)', op: 0.45 },
  { type: 'tally', top: '72%', left: '7%', rot: -3, s: 0.95 },
  { type: 'star', top: '78%', left: '94%', rot: 6, s: 1, op: 0.6 },
  { type: 'underline', top: '83%', left: '4%', rot: 2, s: 1.1 },
  { type: 'strike', top: '88%', left: '86%', rot: -5, s: 1 },
  { type: 'scribble', top: '92%', left: '40%', rot: 3, s: 0.9, op: 0.5 },
]

export default function AmbientMarks() {
  return (
    <div className="marks" aria-hidden="true">
      {LOUD_MARKS.map((m, i) => (
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
