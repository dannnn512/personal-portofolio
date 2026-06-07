import Tape from '@/shared/components/Tape'
import type { ArchiveProject } from './archive.data'

type ArchiveCardProps = {
  project: ArchiveProject
}

export default function ArchiveCard({ project }: ArchiveCardProps) {
  return (
    <article
      className="bg-paper text-ink px-5 pt-6 pb-5 relative shadow-card-sm"
      style={{ transform: `rotate(${project.cardRotation}deg)` }}
    >
      <Tape
        width={70}
        top={-10}
        left="50%"
        rotate={project.tapeRotation}
        color={project.tapeColor}
      />

      {/* Meta */}
      <p className="font-mono text-[10px] text-ink-dim tracking-[0.18em] mb-2">
        {project.company.toUpperCase()} · {project.year}
      </p>

      {/* Name */}
      <h3 className="font-display font-extrabold text-[22px] leading-none tracking-[-0.02em] m-0">
        {project.name}
      </h3>

      {/* Role */}
      <p className="font-mono text-[10px] text-ink-dim tracking-[0.1em] mt-1.5 mb-0">
        {project.role.toUpperCase()}
      </p>

      {/* Body */}
      <p className="font-sans text-[13px] leading-[1.5] mt-3.5 mb-3.5 text-ink">
        {project.body}
      </p>

      {/* Stack note */}
      <div
        className="pt-3 font-hand text-[17px] text-hot"
        style={{ borderTop: '1.5px dashed #5a504a' }}
      >
        {project.stack}
      </div>
    </article>
  )
}
