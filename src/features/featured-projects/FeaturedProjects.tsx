import Eyebrow from '@/shared/components/Eyebrow'
import FeaturedProjectCard from './FeaturedProjectCard'
import { FEATURED_PROJECTS } from './featured.data'

export default function FeaturedProjects() {
  return (
    <section
      id="built"
      className="bg-bg-alt px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#ff5a3c">// FEATURED.LOG</Eyebrow>

      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[64px] lg:text-[88px] xl:text-[120px]">
        THINGS I MADE.
        <br />
        <span className="text-muted">NOT SLIDES.</span>
      </h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 max-sm:mt-12">
        {FEATURED_PROJECTS.map((project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
