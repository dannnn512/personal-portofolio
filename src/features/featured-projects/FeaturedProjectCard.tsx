import Tape from '@/shared/components/Tape'
import type { FeaturedProject } from './featured.types'

type FeaturedProjectCardProps = {
  project: FeaturedProject
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const slug = project.name.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')

  return (
    <article
      className="bg-paper text-ink px-7 pt-8 pb-7 relative shadow-card"
      style={{ transform: `rotate(${project.cardRotation}deg)` }}
    >
      <Tape
        width={120}
        top={-12}
        left="50%"
        rotate={project.tapeRotation}
        color={project.tapeColor}
      />

      {/* Meta */}
      <p className="font-mono text-[11px] text-ink-dim tracking-[0.18em] mb-3">
        {project.company.toUpperCase()} · {project.year} ·{' '}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-hot transition-colors"
            style={{ borderBottom: '1px solid currentColor' }}
          >
            LIVE →
          </a>
        ) : (
          <span className="text-ink">IN STEALTH</span>
        )}
      </p>

      {/* Name */}
      <h3 className="font-display font-extrabold text-[36px] leading-[0.95] tracking-[-0.03em] m-0">
        {project.name}
      </h3>

      {/* Role */}
      <p className="font-mono text-[11px] text-ink-dim tracking-[0.12em] mt-2 mb-0">
        {project.role.toUpperCase()}
      </p>

      {/* Screenshot placeholder */}
      <div
        className="mt-5 flex items-end p-3 font-mono text-[10px] text-muted"
        style={{
          aspectRatio: '4/3',
          background: '#2a2620',
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.04) 8px, rgba(255,255,255,0.04) 9px)',
        }}
      >
        [{project.name.toLowerCase()} screenshot]
      </div>

      {/* Description */}
      <p className="font-sans text-[14px] leading-[1.5] mt-4 mb-0 text-ink">
        {project.shipped}
      </p>

      {/* Bottom bar */}
      <div
        className="mt-5 pt-4 flex justify-between items-center"
        style={{ borderTop: '1.5px dashed #5a504a' }}
      >
        <span className="font-hand text-[20px] text-hot">{project.handNote}</span>
        <a
          href={`/work/${slug}`}
          className="font-display font-bold text-[13px] uppercase tracking-[0.06em] pb-0.5 text-ink hover:translate-x-1 transition-transform inline-block"
          style={{ borderBottom: '2px solid #1a1614' }}
        >
          CASE →
        </a>
      </div>
    </article>
  )
}
