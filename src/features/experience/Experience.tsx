import Eyebrow from '@/shared/components/Eyebrow'
import { EXPERIENCE } from './experience.data'

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t-2 border-cream bg-bg-alt px-14 py-20 max-md:px-5 max-md:py-10"
    >
      <Eyebrow color="#7df9c9">// EXPERIENCE.TIMELINE</Eyebrow>

      <h2 className="font-display font-extrabold text-cream uppercase tracking-[-0.03em] m-0 mb-14 text-[30px] sm:text-[40px] lg:text-[52px] xl:text-[64px]">
        4 YEARS · {EXPERIENCE.length} ARCS.
      </h2>

      {/* Desktop timeline — one column per entry, horizontal line */}
      <div className="hidden xl:block relative">
        {/* Timeline line */}
        <div
          className="absolute h-0.5 bg-cream"
          style={{ top: 14, left: 0, right: 0 }}
        />

        <div className="grid grid-cols-5">
          {EXPERIENCE.map((item) => (
            <div key={item.company} className="relative pt-9 pr-4">
              {/* Dot */}
              <div
                className="absolute rounded-full"
                style={{
                  top: 6,
                  left: 0,
                  width: 18,
                  height: 18,
                  background: item.dotColor,
                  border: '3px solid #1a1a1a',
                  boxShadow: '0 0 0 2px #f5f1e8',
                }}
              />
              <p className="font-mono text-[11px] text-muted tracking-[0.14em] m-0">
                {item.span}
              </p>
              <p className="font-display font-extrabold text-cream text-[22px] tracking-[-0.01em] mt-1.5 mb-0">
                {item.company}
              </p>
              {item.fullName && (
                <p className="font-mono text-[10px] text-muted tracking-[0.1em] mt-0.5 mb-0 uppercase">
                  {item.fullName}
                </p>
              )}
              <p className="font-sans text-[14px] text-muted mt-1 mb-0">
                {item.role}
              </p>
              <p className="font-sans text-[13px] leading-[1.5] text-cream/80 mt-3 mb-0">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Below xl — same left → right timeline, swiped sideways */}
      <p className="xl:hidden font-mono text-[10px] text-muted tracking-[0.12em] -mt-8 mb-6">
        OLDEST → NEWEST · SWIPE →
      </p>
      <ol className="xl:hidden list-none m-0 -mx-5 px-5 scroll-pl-5 md:-mx-14 md:px-14 md:scroll-pl-14 pt-2 flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {EXPERIENCE.map((item) => (
          <li
            key={item.company}
            className="relative flex-none w-[240px] snap-start pt-7 pr-5 border-t-2 border-cream"
          >
            <span
              aria-hidden
              className="absolute rounded-full"
              style={{
                top: -9,
                left: 0,
                width: 16,
                height: 16,
                background: item.dotColor,
                border: '2px solid #1a1a1a',
                boxShadow: '0 0 0 2px #f5f1e8',
              }}
            />
            <p className="font-mono text-[10px] text-muted tracking-[0.12em] m-0">{item.span}</p>
            <p className="font-display font-extrabold text-cream text-[18px] tracking-[-0.01em] mt-1 mb-0">
              {item.company}
            </p>
            {item.fullName && (
              <p className="font-mono text-[9px] text-muted tracking-[0.1em] mt-0.5 mb-0 uppercase">
                {item.fullName}
              </p>
            )}
            <p className="font-sans text-[13px] text-muted mt-0.5 mb-0">{item.role}</p>
            <p className="font-sans text-[12px] leading-[1.5] text-cream/80 mt-2 mb-0">{item.note}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
