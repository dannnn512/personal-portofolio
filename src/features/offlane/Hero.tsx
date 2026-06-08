import { ChalkBox, ChalkSlash, ChalkSwirl, ChalkUnderline } from './chalk'

type HeroProps = {
  slashColor?: string
  swirlOpacity?: number
}

export default function Hero({ slashColor = 'var(--accent)', swirlOpacity = 0.82 }: HeroProps) {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-swirl" aria-hidden="true">
        <ChalkSwirl color="var(--cream)" style={{ width: '100%', height: '100%', opacity: swirlOpacity }} />
      </div>

      <div className="status-pill">
        <ChalkBox color="var(--electric)" />
        <span className="dot" style={{ background: 'var(--electric)' }} />
        OFF-HOURS LAB
      </div>

      <h1 className="wordmark chalk-text">
        <span className="line">OFF</span>
        <span className="line">LANE</span>
        <span
          className="slash"
          aria-hidden="true"
          style={{ top: '2%', left: '60%', width: '0.5em', height: '0.96em' }}
        >
          <ChalkSlash color={slashColor} style={{ width: '100%', height: '100%' }} />
        </span>
      </h1>

      <div className="hero-sub">
        <p className="hero-tag">
          the work I do{' '}
          <span className="cu">
            off the main lane.
            <ChalkUnderline color={slashColor} />
          </span>
        </p>
        <p className="hero-statusline">quiet mode · in progress · not for hire</p>
      </div>
    </section>
  )
}
