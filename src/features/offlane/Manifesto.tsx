export default function Manifesto() {
  return (
    <section className="sec wrap" id="manifesto">
      <div className="eyebrow">
        <span className="idx">01</span> — manifesto
      </div>
      <div className="manifesto-grid">
        <p className="manifesto-body">
          Side products, experiments, writing. Built after hours, separate from the
          day job.{' '}
          <span className="dim">
            Most of it isn&rsquo;t done. Some of it never will be.
          </span>{' '}
          If something fits, it can be yours. This is where it lives anyway.
        </p>
        <div className="manifesto-aside">
          <span className="k">// off the record</span>
          <br />
          built after hours.
          <br />
          the day job is founder-direct &mdash;
          <br />
          this is everything else.
          <br />
          <br />
          <span className="note" style={{ fontSize: 22, transform: 'rotate(-3deg)' }}>
            a slow shop.
          </span>
        </div>
      </div>
    </section>
  )
}
