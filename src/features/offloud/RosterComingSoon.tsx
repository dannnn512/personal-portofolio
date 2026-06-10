import { LoudUnderline } from './loud'

export default function RosterComingSoon() {
  return (
    <section className="sec wrap" id="roster">
      <div className="eyebrow">
        <span className="idx">02</span> — roster
      </div>
      <div className="sec-head">
        <h2 className="sec-title cs-title loud-text">Coming&nbsp;Soon.</h2>
        <span className="label">three rooms · awaiting first sound</span>
      </div>

      <p className="cs-sub">
        the horrors{' '}
        <span className="cu">
          are incoming.
          <LoudUnderline color="var(--accent)" />
        </span>
      </p>

      <p className="cs-handnote">
        <span className="note" style={{ fontSize: 24, transform: 'rotate(-2deg)', display: 'inline-block' }}>
          three rooms, lit and waiting.
        </span>
      </p>
    </section>
  )
}
