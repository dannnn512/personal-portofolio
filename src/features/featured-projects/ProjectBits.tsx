import { Fragment, useState } from 'react'
import type { Project } from './featured.types'

type ProjectImageProps = {
  project: Project
  // Featured cards keep a placeholder box until a screenshot exists; archive cards show nothing.
  withPlaceholder?: boolean
}

export function ProjectImage({ project, withPlaceholder = false }: ProjectImageProps) {
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading')

  if (state === 'error' && !withPlaceholder) return null

  return (
    <div
      className={
        withPlaceholder || state === 'ok'
          ? 'relative mt-5 overflow-hidden flex items-center justify-center bg-paper-dark'
          : 'hidden'
      }
      style={{ aspectRatio: '4/3' }}
    >
      {state !== 'ok' && withPlaceholder && (
        <span className="font-display font-extrabold text-[20px] tracking-[-0.02em] text-muted text-center px-4">
          {project.name}
        </span>
      )}
      {state !== 'error' && (
        <img
          src={`/projects/${project.slug}.png`}
          alt={`${project.name} screenshot`}
          onLoad={() => setState('ok')}
          onError={() => setState('error')}
          className={state === 'ok' ? 'absolute inset-0 w-full h-full object-cover' : 'hidden'}
        />
      )}
    </div>
  )
}

export function ProjectMeta({ project, className }: { project: Project; className: string }) {
  const parts: React.ReactNode[] = [project.company.toUpperCase()]
  if (project.year) parts.push(project.year.toUpperCase())
  if (project.status) parts.push(<span className="text-ink">{project.status.toUpperCase()}</span>)
  for (const link of project.links) {
    parts.push(
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink hover:text-hot-deep transition-colors"
        style={{ borderBottom: '1px solid currentColor' }}
      >
        {link.label.toUpperCase()} →
      </a>
    )
  }

  return (
    <p className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && ' · '}
          {part}
        </Fragment>
      ))}
    </p>
  )
}

export function ProjectTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null
  return (
    <ul className="list-none p-0 m-0 mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
      {tags.map((tag) => (
        <li
          key={tag}
          className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink border border-ink-dim px-1.5 py-0.5"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
