import Tape from '@/shared/components/Tape'
import type { Project } from './featured.types'
import { ProjectImage, ProjectMeta, ProjectTags } from './ProjectBits'

const TAPE_COLORS = ['#ff5a3c', '#7df9c9', '#ffd84a']
const CARD_ROTATIONS = [-1.5, 0.8, -0.5]
const TAPE_ROTATIONS = [-6, 4, -3]

type FeaturedProjectCardProps = {
  project: Project
  index: number
}

export default function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const i = index % TAPE_COLORS.length

  return (
    <article
      className="bg-paper text-ink px-7 pt-8 pb-7 relative shadow-card max-md:flex-none max-md:w-[78vw] max-md:max-w-[320px] max-md:snap-start max-md:px-5 max-md:pt-7 max-md:pb-5"
      style={{ transform: `rotate(${CARD_ROTATIONS[i]}deg)` }}
    >
      <Tape width={120} top={-12} left="50%" rotate={TAPE_ROTATIONS[i]} color={TAPE_COLORS[i]} />

      <ProjectMeta
        project={project}
        className="font-mono text-[11px] text-ink-dim tracking-[0.18em] mb-3"
      />

      <h3 className="font-display font-extrabold text-[36px] leading-[0.95] tracking-[-0.03em] m-0">
        {project.name}
      </h3>

      {project.role && (
        <p className="font-mono text-[11px] text-ink-dim tracking-[0.12em] mt-2 mb-0">
          {project.role.toUpperCase()}
        </p>
      )}

      <ProjectImage project={project} withPlaceholder />

      <p className="font-sans text-[14px] leading-[1.5] mt-4 mb-0 text-ink">
        {project.description}
      </p>

      <ProjectTags tags={project.tags} />

      {project.handNote && (
        <div className="mt-5 pt-4" style={{ borderTop: '1.5px dashed #5a504a' }}>
          <span className="font-hand text-[20px] text-hot-deep">{project.handNote}</span>
        </div>
      )}
    </article>
  )
}
