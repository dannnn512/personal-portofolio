const SOCIAL_LINKS = [
  { label: 'EMAIL', href: 'mailto:arya.ziddan7@gmail.com' },
  { label: 'GITHUB', href: 'https://github.com/dannnn512', rel: 'noopener noreferrer' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/aryaziddan/', rel: 'noopener noreferrer' },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-cream px-14 py-8 flex justify-between items-center flex-wrap gap-4 font-mono text-[12px] text-muted uppercase tracking-[0.12em] max-sm:px-6">
      <span>ZIDDAN ARYASATYA NUGRAHA · WORKSHOP · {new Date().getFullYear()}</span>
      <div className="flex gap-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.rel ? '_blank' : undefined}
            rel={link.rel}
            className="hover:text-cream transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
