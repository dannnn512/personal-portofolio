import { LoudBox, LoudBurst, LoudSlash, LoudUnderline } from './loud'

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-burst" aria-hidden="true">
        <LoudBurst color="var(--cream)" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="status-pill">
        <LoudBox color="var(--accent)" />
        <span className="dot" style={{ background: 'var(--accent)' }} />
        AFTER-HOURS LABEL
      </div>

      <h1 className="wordmark loud-text">
        <span className="line">OFF</span>
        <span className="line loud">LOUD</span>
        <span className="slash" aria-hidden="true">
          <LoudSlash color="var(--accent)" style={{ width: '100%', height: '100%' }} />
        </span>
      </h1>

      <div className="hero-sub">
        <p className="hero-tag">
          the loud side{' '}
          <span className="cu">
            of after-hours.
            <LoudUnderline color="var(--accent)" />
          </span>
        </p>
        <p className="hero-statusline">three rooms · one label · no music yet</p>
      </div>
    </section>
  )
}
