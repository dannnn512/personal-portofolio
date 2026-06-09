import { Link } from 'react-router-dom'

export default function FloatingBackHome() {
  return (
    <Link
      to="/"
      aria-label="Back to Ziddan / Workshop"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-baseline gap-2 font-editorial italic text-cream/70 hover:text-hot text-[18px] lg:text-[20px] leading-none tracking-[-0.005em] no-underline transition-colors max-sm:bottom-4 max-sm:right-4"
    >
      <span className="not-italic font-sans text-[16px] lg:text-[18px] transition-transform group-hover:-translate-x-1">
        ←
      </span>
      <span className="border-b border-cream/30 group-hover:border-hot/60 pb-0.5 transition-colors">
        back to me
      </span>
    </Link>
  )
}
