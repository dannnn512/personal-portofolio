import Eyebrow from '@/shared/components/Eyebrow'
import { EXPERIENCE } from './experience.data'

export default function Experience() {
  return (
    <section
      className="border-t-2 border-cream bg-bg-alt px-14 py-20 max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#7df9c9">// EXPERIENCE.TIMELINE</Eyebrow>

      <h2 className="font-display font-extrabold text-cream uppercase tracking-[-0.03em] m-0 mb-14 text-[40px] lg:text-[52px] xl:text-[64px]">
        4 YEARS, 4 HOMES.
      </h2>

      {/* Desktop timeline — 4-col with horizontal line */}
      <div className="hidden lg:block relative">
        {/* Timeline line */}
        <div
          className="absolute h-0.5 bg-cream"
          style={{ top: 14, left: 0, right: 0 }}
        />

        <div className="grid grid-cols-4">
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

      {/* Mobile timeline — vertical stack with colored left dots */}
      <div className="lg:hidden flex flex-col gap-8">
        {EXPERIENCE.map((item) => (
          <div key={item.company} className="flex gap-4 items-start">
            <div
              className="flex-shrink-0 rounded-full mt-1"
              style={{
                width: 14,
                height: 14,
                background: item.dotColor,
                border: '2px solid #1a1a1a',
                boxShadow: '0 0 0 2px #f5f1e8',
              }}
            />
            <div>
              <p className="font-mono text-[11px] text-muted tracking-[0.14em] m-0">
                {item.span}
              </p>
              <p className="font-display font-extrabold text-cream text-[20px] tracking-[-0.01em] mt-1 mb-0">
                {item.company}
              </p>
              <p className="font-sans text-[14px] text-muted mt-0.5 mb-0">
                {item.role}
              </p>
              <p className="font-sans text-[13px] leading-[1.5] text-cream/80 mt-2 mb-0">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
