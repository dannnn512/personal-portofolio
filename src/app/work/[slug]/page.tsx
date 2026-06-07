import { useParams } from 'react-router-dom'

export default function CaseStudyPage() {
  const { slug = '' } = useParams<{ slug: string }>()

  return (
    <div className="px-14 py-20 max-sm:px-6 max-sm:py-12 min-h-screen">
      <p className="font-mono text-muted text-[12px] tracking-widest uppercase mb-8">
        // CASE.STUDY
      </p>
      <h1 className="font-display font-extrabold text-cream text-[64px] uppercase tracking-tight mb-8">
        {slug.toUpperCase().replace(/-/g, ' ')}
      </h1>
      <p className="font-sans text-muted text-lg">
        Case study coming soon — design in progress.
      </p>
    </div>
  )
}
