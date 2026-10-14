import { Link } from 'react-router-dom'

// Page order, so the mobile chip rail reads top → bottom
const NAV_LINKS = [
  { label: 'Built', href: '#built' },
  { label: 'Archive', href: '#archive' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Method', href: '#method' },
  { label: 'Now', href: '#now' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b-2 border-cream font-mono">
      <div className="flex justify-between items-center px-14 py-5 max-md:px-5 max-md:py-3">
        {/* Brand */}
        <Link
          to="/"
          className="font-display text-[22px] font-extrabold text-cream tracking-[-0.02em] no-underline max-md:text-[19px]"
        >
          ZIDDAN/<span className="text-hot">WORKSHOP</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.08em] uppercase text-muted">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cream transition-colors">
              {link.label}
            </a>
          ))}
          <Link
            to="/hire"
            className="bg-electric text-ink px-3 py-1.5 font-bold hover:bg-[#a0fbd4] transition-colors"
          >
            WORK WITH ME
          </Link>
        </nav>

        {/* Mobile: hire pill stays in the bar */}
        <Link
          to="/hire"
          className="md:hidden bg-electric text-ink px-3 py-3 text-[11px] font-semibold tracking-[0.08em] hover:bg-[#a0fbd4] transition-colors"
        >
          WORK WITH ME
        </Link>
      </div>

      {/* Mobile: swipeable section chips */}
      <nav
        aria-label="Sections"
        className="md:hidden flex gap-1.5 overflow-x-auto no-scrollbar px-5 pb-3 text-[11px] tracking-[0.1em] uppercase"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex-none border-[1.5px] border-ink-dim text-muted px-3 py-2 hover:border-cream hover:text-cream transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
