export default function Manifesto() {
  return (
    <section className="sec wrap" id="manifesto">
      <div className="eyebrow">
        <span className="idx">01</span> — manifesto
      </div>
      <div className="manifesto-grid">
        <p className="manifesto-body">
          Three bands under one roof, each one loud in a different language.{' '}
          <span className="dim">
            Nothing&rsquo;s out yet — no songs, no covers, no proof.
          </span>{' '}
          Just <span className="lit">the rooms</span>, lit and waiting.
        </p>
        <div className="manifesto-aside">
          <span className="k">// house rules</span>
          <br />
          heaviness is a dialect, not a genre.
          <br />
          loud, but never hollow.
          <br />
          the soft parts hit harder.
          <br />
          <br />
          <span className="note" style={{ fontSize: 22, transform: 'rotate(-3deg)' }}>
            doors when it&rsquo;s ready.
          </span>
        </div>
      </div>
    </section>
  )
}
