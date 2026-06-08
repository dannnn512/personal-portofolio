import { ChalkBox } from './chalk'

type Experiment = {
  id: string
  meta: string
  accent?: boolean
}

const EXPERIMENTS: Experiment[] = [
  { id: 'EXP.01', meta: 'slot reserved' },
  { id: 'EXP.02', meta: 'first drop · TBD', accent: true },
  { id: 'EXP.03', meta: 'in the back room' },
  { id: 'EXP.04', meta: 'untitled' },
]

function ExpCard({ id, meta, accent }: Experiment) {
  return (
    <article className="card">
      <ChalkBox color="var(--line-faint)" dashed />
      <div className="card-top">
        <span className="card-id">{id}</span>
        <span className="card-chip">
          <span className="dot" />—
        </span>
      </div>
      <div className="card-center">
        <span className="card-dash">—</span>
      </div>
      <div className="card-foot-wrap">
        <div className="card-divider" />
        <div className="card-foot">
          <span className={accent ? 'card-meta accent' : 'card-meta'}>{meta}</span>
          <span className="card-cta is-ghost">get&nbsp;it →</span>
        </div>
      </div>
    </article>
  )
}

export default function Experiments() {
  return (
    <section className="sec wrap" id="experiments">
      <div className="eyebrow">
        <span className="idx">02</span> — experiments
      </div>
      <div className="sec-head">
        <h2 className="sec-title chalk-text">Experiments</h2>
        <span className="label">first drop&nbsp;·&nbsp;TBD</span>
      </div>
      <div className="grid">
        {EXPERIMENTS.map((e) => (
          <ExpCard key={e.id} {...e} />
        ))}
      </div>
    </section>
  )
}
