import Eyebrow from '@/shared/components/Eyebrow'
import FeaturedProjectCard from './FeaturedProjectCard'
import { FEATURED_PROJECTS } from './featured.data'

export default function FeaturedProjects() {
  return (
    <section
      id="built"
      className="bg-bg-alt px-14 py-[100px] max-md:px-5 max-md:py-10"
    >
      <Eyebrow color="#ff5a3c">// FEATURED.LOG</Eyebrow>

      <div className="md:flex md:justify-between md:items-end md:gap-4">
        <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[36px] sm:text-[64px] lg:text-[88px] xl:text-[120px]">
          THINGS I SHIPPED.
          <br />
          <span className="text-muted">NOT PROMISED.</span>
        </h2>
        <p className="md:hidden font-mono text-[11px] tracking-[0.12em] text-muted mt-3 mb-0">
          {FEATURED_PROJECTS.length} PROJECTS · SWIPE →
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-7 max-md:flex max-md:gap-4 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:no-scrollbar max-md:-mx-5 max-md:px-5 max-md:scroll-pl-5 max-md:pt-8 max-md:pb-6 max-md:mt-4">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
