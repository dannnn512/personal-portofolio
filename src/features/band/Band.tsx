import { Link } from 'react-router-dom'
import Eyebrow from '@/shared/components/Eyebrow'

export default function Band() {
  return (
    <section
      id="band"
      className="border-t-2 border-cream bg-bg px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#ff5a3c">// OFF/LOUD</Eyebrow>

      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[48px] lg:text-[66px] xl:text-[88px]">
        OFF<span className="text-hot">/</span>LOUD.
      </h2>

      <Link
        to="/offloud"
        className="group mt-10 inline-flex items-baseline gap-3 font-editorial italic text-cream text-[28px] lg:text-[34px] leading-none tracking-[-0.005em] transition-colors hover:text-hot"
      >
        <span className="border-b border-cream/30 group-hover:border-hot/60 transition-colors pb-1">
          visit
        </span>
        <span className="not-italic font-sans text-[20px] lg:text-[24px] transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </section>
  )
}
