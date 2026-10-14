import Eyebrow from '@/shared/components/Eyebrow'

export default function About() {
  return (
    <section
      id="about"
      className="border-t-2 border-cream px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#ffd84a">// ABOUT.ME</Eyebrow>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_1.4fr] items-start">
        <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[48px] lg:text-[66px] xl:text-[88px]">
          FIRST
          <br />
          <span className="text-muted">ENGINEER.</span>
        </h2>

        <div className="font-sans text-[18px] leading-[1.6] text-cream max-w-[680px] flex flex-col gap-6">
          <p className="m-0">
            I usually work as the sole or first engineer next to a founder, taking products from
            idea to launch across web, mobile, and backend.
          </p>
          <p className="m-0 text-muted">
            I use AI with structure. Every feature starts with a written spec covering intent and
            technical approach. Each project has a <code className="font-mono text-cream text-[15px]">CLAUDE.md</code>{' '}
            (the brief, the guardrails, what the agent can and cannot access) and a{' '}
            <code className="font-mono text-cream text-[15px]">decision.md</code> (the approved
            stack and architecture decisions), with specialized subagents per area. AI access to
            servers and databases is restricted, and I review every change. It lets me move fast
            without losing control of quality.
          </p>
        </div>
      </div>
    </section>
  )
}
