import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Built', href: '#built' },
  { label: 'Archive', href: '#archive' },
  { label: 'Method', href: '#method' },
  { label: 'Now', href: '#now' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg border-b-2 border-cream font-mono">
      <div className="flex justify-between items-center px-14 py-5 max-sm:px-6">
        {/* Brand */}
        <Link
          to="/"
          className="font-display text-[22px] font-extrabold text-cream tracking-[-0.02em] no-underline"
        >
          ZIDDAN/<span className="text-hot">WORKSHOP</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[12px] tracking-[0.08em] uppercase text-muted">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cream transition-colors"
            >
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t-2 border-cream px-6 py-6 flex flex-col gap-5 text-[12px] tracking-[0.08em] uppercase text-muted bg-bg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cream transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/hire"
            className="bg-electric text-ink px-3 py-1.5 font-bold text-center hover:bg-[#a0fbd4] transition-colors"
            onClick={() => setOpen(false)}
          >
            WORK WITH ME
          </Link>
        </nav>
      )}
    </header>
  )
}
