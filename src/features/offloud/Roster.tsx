import { useEffect, type CSSProperties } from 'react'
import { LoudBox } from './loud'

function IcoSpotify() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.6} />
      <path
        d="M7 9.5c3.2-.9 6.6-.5 9 1M7.6 12.4c2.6-.7 5.3-.3 7.2 1M8.2 15.2c2-.5 4-.2 5.4.8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
function IcoBandcamp() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x={2.5} y={3.5} width={19} height={17} rx={1.5} stroke="currentColor" strokeWidth={1.6} />
      <path d="M8.5 8 L16 8 L11.5 16 L4 16 Z" fill="currentColor" opacity={0.85} />
    </svg>
  )
}
function IcoYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x={2.5} y={5.5} width={19} height={13} rx={3.5} stroke="currentColor" strokeWidth={1.6} />
      <path d="M10.5 9.2 L15 12 L10.5 14.8 Z" fill="currentColor" />
    </svg>
  )
}
function IcoInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x={3.5} y={3.5} width={17} height={17} rx={5} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={12} cy={12} r={4} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={17} cy={7} r={1.1} fill="currentColor" />
    </svg>
  )
}

const SERVICES = [
  { id: 'spotify', el: <IcoSpotify /> },
  { id: 'bandcamp', el: <IcoBandcamp /> },
  { id: 'youtube', el: <IcoYouTube /> },
  { id: 'instagram', el: <IcoInstagram /> },
]

type TapeProps = {
  color: string
  width?: number
  top?: number
  left?: string
  rotate?: number
}

function Tape({ color, width = 120, top = -13, left = '50%', rotate = -6 }: TapeProps) {
  return (
    <div
      className="tape"
      aria-hidden="true"
      style={{
        top,
        left,
        width,
        backgroundColor: color,
        ['--tape-rot' as string]: `${rotate}deg`,
      } as CSSProperties}
    />
  )
}

function RoseFlourish() {
  return (
    <div className="flourish flourish--rose" aria-hidden="true">
      <svg viewBox="0 0 64 64" width={64} height={64}>
        <g stroke="var(--rose)" strokeWidth={2} fill="none" strokeLinecap="round">
          <path d="M32 34 C 22 28, 22 14, 32 14 C 42 14, 42 28, 32 34" />
          <path d="M32 34 C 42 24, 56 28, 52 38 C 49 47, 36 44, 32 34" />
          <path d="M32 34 C 36 46, 28 56, 20 50 C 13 45, 20 34, 32 34" />
          <path d="M32 34 C 20 38, 10 30, 16 22 C 21 16, 32 24, 32 34" />
          <circle cx={32} cy={32} r={4.5} fill="var(--rose-deep)" stroke="none" />
          <path d="M32 38 C 33 48, 33 56, 33 60" stroke="var(--leaf)" />
          <path d="M33 50 C 38 47, 44 49, 45 44" stroke="var(--leaf)" />
        </g>
      </svg>
    </div>
  )
}

type BandVariant = 'blood' | 'rose' | 'rain'

type Band = {
  idx: string
  variant: BandVariant
  name: string
  role: string
  tags: string[]
  tagline: string
  video: string
  poster: string
  tapes: TapeProps[]
}

const BANDS: Band[] = [
  {
    idx: '01',
    variant: 'blood',
    name: 'Theatre of Blood',
    role: 'the main project · heaviest room',
    tags: ['blackened deathcore', 'technical death metal', 'deathcore'],
    tagline: 'the heaviest room. the one everything else is measured against.',
    video: '/media/tob-fire.webm',
    poster: '/media/tob-fire-poster.jpg',
    tapes: [
      { color: 'var(--hot)', width: 152, top: -15, left: '34%', rotate: -7 },
      { color: 'var(--hot)', width: 96, top: -9, left: '82%', rotate: 6 },
    ],
  },
  {
    idx: '02',
    variant: 'rose',
    name: 'Antithesis',
    role: 'side project · theatrical',
    tags: ['visual kei', 'symphonic', 'neoclassical', 'metalcore', 'symphonic metal'],
    tagline: 'theatrical, gothic-elegant — the soft side of brutality.',
    video: '/media/antithesis-petals.webm',
    poster: '/media/antithesis-petals-poster.jpg',
    tapes: [{ color: 'var(--rose)', width: 118, top: -13, left: '62%', rotate: 5 }],
  },
  {
    idx: '03',
    variant: 'rain',
    name: 'Gabriella',
    role: 'side project · melodic',
    tags: ['post-hardcore', 'metalcore', 'melodic'],
    tagline: 'clean vocals, open sky. the antithesis of the other two.',
    video: '/media/gabriella-rain.webm',
    poster: '/media/gabriella-rain-poster.jpg',
    tapes: [{ color: 'var(--electric)', width: 108, top: -12, left: '38%', rotate: -5 }],
  },
]

function BandCard({ band }: { band: Band }) {
  return (
    <div className={`flyer band--${band.variant}`} tabIndex={0}>
      <article className="band">
        <div className="media" aria-hidden="true">
          <video
            className="aura-video"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={band.poster}
            data-src={band.video}
          />
        </div>
        {band.variant === 'rain' && <div className="halo" aria-hidden="true" />}
        <div className="rm-glow" aria-hidden="true" />
        <LoudBox color="var(--line-faint)" />

        <div className="band-inner">
          <header className="band-top">
            <span className="band-idx">{band.idx}</span>
            <div className="band-tags">
              {band.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </header>

          <div className="band-center">
            <h3 className="band-name">{band.name}</h3>
            <p className="band-role">{band.role}</p>
            <p className="band-tagline">{band.tagline}</p>
          </div>

          <div className="band-foot-wrap">
            <div className="band-divider" />
            <div className="band-foot">
              <div className="svc-row">
                {SERVICES.map((s) => (
                  <span
                    key={s.id}
                    className="svc"
                    data-reserved="true"
                    title={`${s.id} — reserved`}
                  >
                    {s.el}
                  </span>
                ))}
              </div>
              <span className="listen">
                listen <span className="arr">→</span>
              </span>
            </div>
            <p className="reserve-note">no music yet · slots reserved</p>
          </div>
        </div>
      </article>

      {band.tapes.map((tp, i) => (
        <Tape key={i} {...tp} />
      ))}
      {band.variant === 'rose' && <RoseFlourish />}
    </div>
  )
}

export default function Roster() {
  useEffect(() => {
    const vids = Array.from(
      document.querySelectorAll<HTMLVideoElement>('.offloud .aura-video')
    )
    if (!vids.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const v = e.target as HTMLVideoElement
          const src = v.dataset.src
          if (src && !v.getAttribute('src')) {
            v.preload = 'metadata'
            v.setAttribute('src', src)
            v.load()
          }
          io.unobserve(v)
        })
      },
      { rootMargin: '300px 0px' }
    )
    vids.forEach((v) => io.observe(v))
    return () => io.disconnect()
  }, [])

  return (
    <section className="sec wrap" id="roster">
      <div className="eyebrow">
        <span className="idx">02</span> — roster
      </div>
      <div className="sec-head">
        <h2 className="sec-title loud-text">Roster</h2>
        <span className="label">three bands&nbsp;·&nbsp;one label</span>
      </div>
      <div className="pile">
        {BANDS.map((b) => (
          <BandCard key={b.name} band={b} />
        ))}
      </div>
    </section>
  )
}
