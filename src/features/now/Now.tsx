import { Link } from 'react-router-dom'
import Eyebrow from '@/shared/components/Eyebrow'
import Tape from '@/shared/components/Tape'
import HandNote from '@/shared/components/HandNote'
import { NOW_ITEMS, getStatusPrefix } from './now.data'

export default function Now() {
  return (
    <section
      id="now"
      className="border-t-2 border-cream bg-bg-alt px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#ffd84a">// /NOW</Eyebrow>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1.4fr_1fr] xl:gap-12 items-start">
        {/* Left — headline */}
        <div>
          <h2 className="font-display font-extrabold text-cream uppercase m-0 leading-[0.95] tracking-[-0.03em] text-[48px] lg:text-[66px] xl:text-[88px]">
            <span className="text-hot">OFF-HOURS</span>
            <br />
            LAB.
            <br />
            <span className="text-muted text-[32px] lg:text-[44px] xl:text-[56px]">
              QUIET MODE.
            </span>
          </h2>

          <Link
            to="/offlane"
            className="group mt-6 inline-flex items-baseline gap-3 font-editorial italic text-cream text-[28px] lg:text-[34px] leading-none tracking-[-0.005em] transition-colors hover:text-hot"
          >
            <span className="border-b border-cream/30 group-hover:border-hot/60 transition-colors pb-1">
              step into the lab
            </span>
            <span className="not-italic font-sans text-[20px] lg:text-[24px] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Right — paper card */}
        <div
          className="bg-paper text-ink p-6 relative shadow-now"
          style={{ transform: 'rotate(1.2deg)' }}
        >
          <Tape width={100} top={-12} left="20%" rotate={-5} color="#7df9c9" />

          <p className="font-mono text-[11px] text-ink-dim tracking-[0.18em] mb-3.5">
            CURRENTLY TINKERING
          </p>

          <ul className="list-none p-0 m-0 font-sans text-[16px] leading-[1.7] font-medium">
            {NOW_ITEMS.map((item) => (
              <li
                key={item.text}
                className={
                  item.status === 'done' ? 'text-ink' : 'text-ink-dim'
                }
              >
                {getStatusPrefix(item.status)} {item.text}
              </li>
            ))}
          </ul>

          <HandNote rotate={-2} color="#ff5a3c" fontSize={22} style={{ marginTop: 24, display: 'block' }}>
            also: open for one founder-led build this quarter
          </HandNote>
        </div>
      </div>
    </section>
  )
}
