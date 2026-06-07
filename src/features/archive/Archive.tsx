import Eyebrow from '@/shared/components/Eyebrow'
import HandNote from '@/shared/components/HandNote'
import ArchiveCard from './ArchiveCard'
import { ARCHIVE_PROJECTS } from './archive.data'

export default function Archive() {
  return (
    <section
      id="archive"
      className="border-t-2 border-cream px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#ffd84a">// ARCHIVE.INDEX</Eyebrow>

      <div className="flex justify-between items-end flex-wrap gap-6">
        <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[48px] lg:text-[66px] xl:text-[88px]">
          + 5 MORE.
          <br />
          <span className="text-muted text-[24px] lg:text-[33px] xl:text-[44px]">
            QUICK STORIES.
          </span>
        </h2>
        <HandNote rotate={-2} color="#7df9c9" fontSize={22} maxWidth={300}>
          ↑ ask about any of these on a call
        </HandNote>
      </div>

      <div className="mt-[60px] grid grid-cols-1 md:grid-cols-3 gap-6 max-sm:mt-12">
        {ARCHIVE_PROJECTS.map((project) => (
          <ArchiveCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
