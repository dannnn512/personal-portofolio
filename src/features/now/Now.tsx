import Eyebrow from '@/shared/components/Eyebrow'
import Tape from '@/shared/components/Tape'
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
        <h2 className="font-display font-extrabold text-cream uppercase m-0 leading-[0.95] tracking-[-0.03em] text-[48px] lg:text-[66px] xl:text-[88px]">
          BUILDING{' '}
          <span className="text-hot">DEBATEME</span>.
          <br />
          <span className="text-muted text-[32px] lg:text-[44px] xl:text-[56px]">
            SHIPPING WEEKLY.
          </span>
        </h2>

        {/* Right — paper card */}
        <div
          className="bg-paper text-ink p-6 relative shadow-now"
          style={{ transform: 'rotate(1.2deg)' }}
        >
          <Tape width={100} top={-12} left="20%" rotate={-5} color="#7df9c9" />

          <p className="font-mono text-[11px] text-ink-dim tracking-[0.18em] mb-3.5">
            THIS WEEK
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
        </div>
      </div>
    </section>
  )
}
