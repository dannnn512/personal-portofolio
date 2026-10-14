import Tape from '@/shared/components/Tape'
import type { Project } from '@/features/featured-projects/featured.types'
import {
  ProjectImage,
  ProjectMeta,
  ProjectTags,
} from '@/features/featured-projects/ProjectBits'

const TAPE_COLORS = ['#ff5a3c', '#7df9c9', '#ffd84a']
const CARD_ROTATIONS = [-1, 1.2, -0.8, 0.6, -1.5]
const TAPE_ROTATIONS = [-5, 4, -3, 6, -2]

type ArchiveCardProps = {
  project: Project
  index: number
}

export default function ArchiveCard({ project, index }: ArchiveCardProps) {
  return (
    <article
      className="bg-paper text-ink px-5 pt-6 pb-5 relative shadow-card-sm"
      style={{ transform: `rotate(${CARD_ROTATIONS[index % CARD_ROTATIONS.length]}deg)` }}
    >
      <Tape
        width={70}
        top={-10}
        left="50%"
        rotate={TAPE_ROTATIONS[index % TAPE_ROTATIONS.length]}
        color={TAPE_COLORS[index % TAPE_COLORS.length]}
      />

      <ProjectMeta
        project={project}
        className="font-mono text-[10px] text-ink-dim tracking-[0.18em] mb-2"
      />

      <h3 className="font-display font-extrabold text-[22px] leading-none tracking-[-0.02em] m-0">
        {project.name}
      </h3>

      {project.role && (
        <p className="font-mono text-[10px] text-ink-dim tracking-[0.1em] mt-1.5 mb-0">
          {project.role.toUpperCase()}
        </p>
      )}

      <ProjectImage project={project} />

      <p className="font-sans text-[13px] leading-[1.5] mt-3.5 mb-0 text-ink">
        {project.description}
      </p>

      <ProjectTags tags={project.tags} />
    </article>
  )
}
