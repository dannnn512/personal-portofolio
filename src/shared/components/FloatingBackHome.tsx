import { Link } from 'react-router-dom'

export default function FloatingBackHome() {
  return (
    <>
      {/* Spacer so the fixed button never covers the page footer */}
      <div aria-hidden className="h-28 max-sm:h-24" />
      <Link
        to="/"
        aria-label="Back to Ziddan / Workshop"
        className="group fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-3 whitespace-nowrap bg-cream text-ink border-2 border-ink px-6 py-3.5 font-display font-extrabold uppercase text-[16px] tracking-[0.02em] no-underline shadow-card transition-colors hover:bg-hot-deep hover:text-cream max-sm:bottom-4 max-sm:px-5 max-sm:py-3 max-sm:text-[14px]"
      >
        <span aria-hidden className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        <span>
          BACK TO ZIDDAN<span className="text-hot-deep group-hover:text-cream">/</span>WORKSHOP
        </span>
      </Link>
    </>
  )
}
