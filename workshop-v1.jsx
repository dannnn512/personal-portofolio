// Workshop V1 — Original Layout × current palette (hot orange + electric mint on near-black)
// Hero centered → Featured (3 tape cards) → Archive grid → Experience strip → Process → Now → Hire

const v1 = {
  bg: '#111111', bgAlt: '#1a1a1a',
  paper: '#ede5d3', paperDark: '#2a2620',
  ink: '#1a1614', inkDim: '#5a504a',
  text: '#f5f1e8', textDim: '#9a948a',
  hot: '#ff5a3c', electric: '#7df9c9', yellow: '#ffd84a',
};
const v1Fonts = { display: "'Bricolage Grotesque', sans-serif", hand: "'Patrick Hand', cursive", mono: "'IBM Plex Mono', monospace", sans: "'Geist', system-ui, sans-serif" };

const V1Highlight = ({ children, color = v1.yellow }) => (
  <span style={{ background: color, color: v1.ink, padding: '0 8px', boxDecorationBreak: 'clone' }}>{children}</span>
);

const V1Nav = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 56px', borderBottom: `2px solid ${v1.text}`, fontFamily: v1Fonts.mono, fontSize: 13, position: 'sticky', top: 0, background: v1.bg, zIndex: 10 }}>
    <div style={{ fontFamily: v1Fonts.display, fontSize: 22, fontWeight: 800, color: v1.text, letterSpacing: '-0.02em' }}>ZIDDAN/<span style={{ color: v1.hot }}>WORKSHOP</span></div>
    <div style={{ display: 'flex', gap: 24, color: v1.textDim, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em' }}>
      <a>Built</a><a>Archive</a><a>Method</a><a>Now</a>
      <a style={{ color: v1.bg, background: v1.electric, padding: '6px 12px', fontWeight: 700 }}>HIRE → OPEN</a>
    </div>
  </div>
);

const V1Hero = () => (
  <section style={{ padding: '80px 56px 100px', position: 'relative' }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', border: `1.5px solid ${v1.electric}`, color: v1.electric, fontFamily: v1Fonts.mono, fontSize: 12, marginBottom: 32 }}>
      <span style={{ width: 8, height: 8, background: v1.electric, borderRadius: '50%' }}></span>
      4 YEARS · 10+ SHIPPED · TAKING 1 NEW IDEA THIS QUARTER
    </div>
    <h1 style={{ fontFamily: v1Fonts.display, fontSize: 200, fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.05em', color: v1.text, margin: 0, textTransform: 'uppercase' }}>
      I&nbsp;BUILD<br />
      <V1Highlight color={v1.hot}><span style={{ color: v1.text }}>YOUR&nbsp;IDEA</span></V1Highlight><br />
      <span style={{ color: v1.textDim }}>FROM&nbsp;ZERO.</span>
    </h1>
    <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'end' }}>
      <p style={{ fontFamily: v1Fonts.sans, fontSize: 22, lineHeight: 1.4, color: v1.text, margin: 0, maxWidth: 700, fontWeight: 500 }}>
        Founding engineer. <span style={{ color: v1.electric }}>Web. Mobile. Backend. Infra.</span> If your idea has a tech part, I am the tech part.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
        <button style={{ background: v1.electric, color: v1.ink, border: 'none', padding: '20px 28px', fontFamily: v1Fonts.display, fontWeight: 700, fontSize: 16, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.02em' }}>START A PROJECT →</button>
        <button style={{ background: 'transparent', color: v1.text, border: `2px solid ${v1.text}`, padding: '20px 28px', fontFamily: v1Fonts.display, fontWeight: 700, fontSize: 16, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.02em' }}>SEE THE WORK</button>
      </div>
    </div>
    <WSCircle top={250} left={420} size={500} color={v1.electric} />
    <div style={{ position: 'absolute', top: 480, right: 80, transform: 'rotate(4deg)', fontFamily: v1Fonts.hand, fontSize: 28, color: v1.yellow, lineHeight: 1.1, maxWidth: 240 }}>
      yes — even the<br />parts you don't<br />understand!
    </div>
    <WSScribbleArrow top={500} left={620} width={140} rotate={20} color={v1.yellow} />
  </section>
);

const V1Stats = () => (
  <section style={{ padding: '40px 56px', borderTop: `2px solid ${v1.text}`, borderBottom: `2px solid ${v1.text}`, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
    {[{ n: WS_STAT.years, l: 'YEARS SHIPPING' }, { n: WS_STAT.projects, l: 'PROJECTS' }, { n: WS_STAT.companies, l: 'COMPANIES' }, { n: WS_STAT.solo, l: 'SOLO BUILDS' }].map((s, i) => (
      <div key={i} style={{ borderRight: i < 3 ? `2px solid ${v1.text}` : 'none', padding: '0 28px' }}>
        <div style={{ fontFamily: v1Fonts.display, fontSize: 88, fontWeight: 800, color: v1.text, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
        <div style={{ fontFamily: v1Fonts.mono, fontSize: 12, color: v1.textDim, letterSpacing: '0.18em', marginTop: 4 }}>{s.l}</div>
      </div>
    ))}
  </section>
);

const V1Featured = () => (
  <section style={{ padding: '100px 56px', position: 'relative', background: v1.bgAlt }}>
    <div style={{ fontFamily: v1Fonts.mono, fontSize: 13, color: v1.hot, letterSpacing: '0.2em', marginBottom: 16 }}>// FEATURED.LOG</div>
    <h2 style={{ fontFamily: v1Fonts.display, fontSize: 120, fontWeight: 800, color: v1.text, margin: 0, letterSpacing: '-0.04em', lineHeight: 0.9, textTransform: 'uppercase' }}>
      THINGS I MADE.<br /><span style={{ color: v1.textDim }}>NOT SLIDES.</span>
    </h2>
    <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
      {WS_FEATURED.map((it, i) => {
        const tape = [v1.hot, v1.electric, v1.yellow][i];
        return (
          <div key={it.name} style={{ background: v1.paper, color: v1.ink, padding: '32px 28px 28px', position: 'relative', transform: `rotate(${[-1.5, 0.8, -0.5][i]}deg)`, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
            <WSTape width={120} top={-12} left="50%" rotate={[-6, 4, -3][i]} color={tape} />
            <div style={{ fontFamily: v1Fonts.mono, fontSize: 11, color: v1.inkDim, letterSpacing: '0.18em', marginBottom: 12 }}>{it.company.toUpperCase()} · {it.year}</div>
            <h3 style={{ fontFamily: v1Fonts.display, fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: '-0.03em', lineHeight: 0.95 }}>{it.name}</h3>
            <div style={{ fontFamily: v1Fonts.mono, fontSize: 11, color: v1.inkDim, letterSpacing: '0.12em', marginTop: 8 }}>{it.role.toUpperCase()}</div>
            <div style={{ aspectRatio: '4/3', marginTop: 20, background: v1.paperDark, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.04) 8px, rgba(255,255,255,0.04) 9px)', display: 'flex', alignItems: 'flex-end', padding: 12, fontFamily: v1Fonts.mono, fontSize: 10, color: v1.textDim }}>[{it.name.toLowerCase()} screenshot]</div>
            <p style={{ fontFamily: v1Fonts.sans, fontSize: 14, lineHeight: 1.5, marginTop: 16, marginBottom: 0, color: v1.ink }}>{it.shipped}</p>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: `1.5px dashed ${v1.inkDim}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: v1Fonts.hand, fontSize: 20, color: v1.hot }}>{it.handNote}</span>
              <a style={{ fontFamily: v1Fonts.display, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: `2px solid ${v1.ink}`, paddingBottom: 2 }}>CASE →</a>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const V1Archive = () => (
  <section style={{ padding: '100px 56px', borderTop: `2px solid ${v1.text}`, position: 'relative' }}>
    <div style={{ fontFamily: v1Fonts.mono, fontSize: 13, color: v1.yellow, letterSpacing: '0.2em', marginBottom: 16 }}>// ARCHIVE.INDEX</div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
      <h2 style={{ fontFamily: v1Fonts.display, fontSize: 88, fontWeight: 800, color: v1.text, margin: 0, letterSpacing: '-0.04em', lineHeight: 0.9, textTransform: 'uppercase' }}>
        + 5 MORE.<br /><span style={{ color: v1.textDim, fontSize: 44 }}>QUICK STORIES.</span>
      </h2>
      <div style={{ fontFamily: v1Fonts.hand, fontSize: 22, color: v1.electric, transform: 'rotate(-2deg)', maxWidth: 300 }}>
        ↑ ask about any of these on a call
      </div>
    </div>
    <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {WS_ARCHIVE.map((it, i) => {
        const tapes = [v1.hot, v1.electric, v1.yellow, v1.hot, v1.electric];
        const rots = [-1, 1.2, -0.8, 0.6, -1.5];
        return (
          <div key={it.name} style={{ background: v1.paper, color: v1.ink, padding: '24px 20px 20px', position: 'relative', transform: `rotate(${rots[i]}deg)`, boxShadow: '0 12px 30px rgba(0,0,0,0.35)' }}>
            <WSTape width={70} top={-10} left="50%" rotate={[-5, 4, -3, 6, -2][i]} color={tapes[i]} />
            <div style={{ fontFamily: v1Fonts.mono, fontSize: 10, color: v1.inkDim, letterSpacing: '0.18em', marginBottom: 8 }}>{it.company.toUpperCase()} · {it.year}</div>
            <h3 style={{ fontFamily: v1Fonts.display, fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>{it.name}</h3>
            <div style={{ fontFamily: v1Fonts.mono, fontSize: 10, color: v1.inkDim, letterSpacing: '0.1em', marginTop: 6 }}>{it.role.toUpperCase()}</div>
            <p style={{ fontFamily: v1Fonts.sans, fontSize: 13, lineHeight: 1.5, marginTop: 14, marginBottom: 14, color: v1.ink }}>{it.body}</p>
            <div style={{ paddingTop: 12, borderTop: `1.5px dashed ${v1.inkDim}`, fontFamily: v1Fonts.hand, fontSize: 17, color: v1.hot }}>{it.stack}</div>
          </div>
        );
      })}
    </div>
  </section>
);

const V1Experience = () => (
  <section style={{ padding: '80px 56px', borderTop: `2px solid ${v1.text}`, background: v1.bgAlt }}>
    <div style={{ fontFamily: v1Fonts.mono, fontSize: 13, color: v1.electric, letterSpacing: '0.2em', marginBottom: 16 }}>// EXPERIENCE.TIMELINE</div>
    <h2 style={{ fontFamily: v1Fonts.display, fontSize: 64, fontWeight: 800, color: v1.text, margin: '0 0 56px', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>4 YEARS, 4 HOMES.</h2>
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
      <div style={{ position: 'absolute', top: 14, left: 24, right: 24, height: 2, background: v1.text }}></div>
      {WS_EXPERIENCE.map((e, i) => {
        const dotColor = [v1.hot, v1.yellow, v1.electric, v1.hot][i];
        return (
          <div key={e.co} style={{ position: 'relative', paddingTop: 36, paddingRight: 16 }}>
            <div style={{ position: 'absolute', top: 6, left: 0, width: 18, height: 18, borderRadius: '50%', background: dotColor, border: `3px solid ${v1.bgAlt}`, boxShadow: `0 0 0 2px ${v1.text}` }}></div>
            <div style={{ fontFamily: v1Fonts.mono, fontSize: 11, color: v1.textDim, letterSpacing: '0.14em' }}>{e.span}</div>
            <div style={{ fontFamily: v1Fonts.display, fontSize: 22, fontWeight: 800, color: v1.text, marginTop: 6, letterSpacing: '-0.01em' }}>{e.co}</div>
            <div style={{ fontFamily: v1Fonts.sans, fontSize: 14, color: v1.textDim, marginTop: 4 }}>{e.role}</div>
          </div>
        );
      })}
    </div>
  </section>
);

const V1Process = () => {
  const steps = [
    { n: '01', t: 'WE TALK', body: 'Plain words. No tech jargon. You tell me your idea, I tell you what it really takes.' },
    { n: '02', t: 'WE SCOPE', body: 'What ships first. What waits. What we cut. You see every tradeoff.' },
    { n: '03', t: 'I BUILD', body: 'Weekly demos. Real product in your hands. If it feels off, we change it.' },
    { n: '04', t: 'TEAM JOINS', body: 'When scope demands. FE, BE, design, sales — only when needed. Lean by default.' },
  ];
  return (
    <section style={{ padding: '100px 56px', borderTop: `2px solid ${v1.text}` }}>
      <div style={{ fontFamily: v1Fonts.mono, fontSize: 13, color: v1.electric, letterSpacing: '0.2em', marginBottom: 16 }}>// HOW.IT.GOES</div>
      <h2 style={{ fontFamily: v1Fonts.display, fontSize: 120, fontWeight: 800, color: v1.text, margin: 0, letterSpacing: '-0.04em', lineHeight: 0.9, textTransform: 'uppercase' }}>BORING.<br /><span style={{ color: v1.hot }}>ON PURPOSE.</span></h2>
      <p style={{ fontFamily: v1Fonts.sans, fontSize: 20, color: v1.textDim, maxWidth: 560, marginTop: 24, lineHeight: 1.4 }}>You'll always know what's happening. Predictable is a feature.</p>
      <div style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ padding: 28, borderLeft: i === 0 ? `2px solid ${v1.text}` : 'none', borderRight: `2px solid ${v1.text}`, borderTop: `2px solid ${v1.text}`, borderBottom: `2px solid ${v1.text}`, minHeight: 240 }}>
            <div style={{ fontFamily: v1Fonts.display, fontSize: 64, fontWeight: 800, color: v1.electric, lineHeight: 0.9, letterSpacing: '-0.04em' }}>{s.n}</div>
            <h3 style={{ fontFamily: v1Fonts.display, fontSize: 22, fontWeight: 800, color: v1.text, margin: '20px 0 12px', letterSpacing: '-0.01em' }}>{s.t}</h3>
            <p style={{ fontFamily: v1Fonts.sans, fontSize: 14, lineHeight: 1.5, color: v1.textDim, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const V1Now = () => (
  <section style={{ padding: '100px 56px', borderTop: `2px solid ${v1.text}`, background: v1.bgAlt }}>
    <div style={{ fontFamily: v1Fonts.mono, fontSize: 13, color: v1.yellow, letterSpacing: '0.2em', marginBottom: 16 }}>// /NOW</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }}>
      <h2 style={{ fontFamily: v1Fonts.display, fontSize: 88, fontWeight: 800, color: v1.text, margin: 0, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>BUILDING <span style={{ color: v1.hot }}>DEBATEME</span>.<br /><span style={{ color: v1.textDim, fontSize: 56 }}>SHIPPING WEEKLY.</span></h2>
      <div style={{ background: v1.paper, color: v1.ink, padding: 24, position: 'relative', transform: 'rotate(1.2deg)', boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}>
        <WSTape width={100} top={-12} left="20%" rotate={-5} color={v1.electric} />
        <div style={{ fontFamily: v1Fonts.mono, fontSize: 11, color: v1.inkDim, letterSpacing: '0.18em', marginBottom: 14 }}>THIS WEEK</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: v1Fonts.sans, fontSize: 16, lineHeight: 1.7, fontWeight: 500 }}>
          <li>✓ Room moderation rules</li><li>✓ Vote weights v2</li>
          <li style={{ color: v1.inkDim }}>→ Spectator UI (in progress)</li><li style={{ color: v1.inkDim }}>○ Notifications batching</li>
        </ul>
      </div>
    </div>
  </section>
);

const V1Hire = () => (
  <section style={{ padding: '120px 56px', borderTop: `2px solid ${v1.text}` }}>
    <div style={{ display: 'inline-block', background: v1.electric, color: v1.ink, padding: '8px 16px', fontFamily: v1Fonts.mono, fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', marginBottom: 32 }}>● WORKSHOP OPEN · Q2–Q3 2026</div>
    <h2 style={{ fontFamily: v1Fonts.display, fontSize: 180, fontWeight: 800, color: v1.text, margin: 0, letterSpacing: '-0.05em', lineHeight: 0.85, textTransform: 'uppercase' }}>
      LET'S<br />BUILD<br /><V1Highlight color={v1.hot}><span style={{ color: v1.text }}>YOURS.</span></V1Highlight>
    </h2>
    <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
      {[{ t: 'MVP · 0→1', d: 'Solo build. 4–8 weeks. Real product, real users.', tape: v1.hot },
        { t: 'FULL PRODUCT', d: 'My team joins. Web, mobile, infra, launch.', tape: v1.electric },
        { t: 'FRACTIONAL CTO', d: 'I run the technical side while you run everything else.', tape: v1.yellow }].map((s, i) => (
        <div key={s.t} style={{ padding: 32, border: `2px solid ${v1.text}`, marginLeft: i > 0 ? -2 : 0 }}>
          <div style={{ width: 36, height: 4, background: s.tape, marginBottom: 18 }}></div>
          <h3 style={{ fontFamily: v1Fonts.display, fontSize: 32, fontWeight: 800, color: v1.text, margin: 0, letterSpacing: '-0.02em' }}>{s.t}</h3>
          <p style={{ fontFamily: v1Fonts.sans, fontSize: 16, lineHeight: 1.5, color: v1.textDim, marginTop: 14, marginBottom: 0 }}>{s.d}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 56, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <button style={{ background: v1.hot, color: v1.text, border: 'none', padding: '22px 32px', fontFamily: v1Fonts.display, fontWeight: 800, fontSize: 18, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.04em' }}>BOOK A CALL →</button>
      <button style={{ background: 'transparent', color: v1.text, border: `2px solid ${v1.text}`, padding: '22px 32px', fontFamily: v1Fonts.display, fontWeight: 800, fontSize: 18, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.04em' }}>DOWNLOAD CV ↓</button>
      <span style={{ fontFamily: v1Fonts.hand, fontSize: 26, color: v1.yellow, marginLeft: 16, transform: 'rotate(-3deg)', display: 'inline-block' }}>← reply within 24h</span>
    </div>
  </section>
);

const V1Footer = () => (
  <footer style={{ padding: '32px 56px', borderTop: `2px solid ${v1.text}`, fontFamily: v1Fonts.mono, fontSize: 12, color: v1.textDim, display: 'flex', justifyContent: 'space-between', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
    <div>ZIDDAN ARYASATYA NUGRAHA · WORKSHOP · 2026</div>
    <div style={{ display: 'flex', gap: 24 }}><span>EMAIL</span><span>GH</span><span>LI</span><span>X</span></div>
  </footer>
);

window.WorkshopV1 = () => (
  <div style={{ background: v1.bg, color: v1.text, fontFamily: v1Fonts.sans, minHeight: '100%' }}>
    <V1Nav /><V1Hero /><V1Stats /><V1Featured /><V1Archive /><V1Experience /><V1Process /><V1Now /><V1Hire /><V1Footer />
  </div>
);
