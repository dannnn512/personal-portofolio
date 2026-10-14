import Eyebrow from '@/shared/components/Eyebrow'
import HandNote from '@/shared/components/HandNote'
import { ARCHIVE_PROJECTS } from '@/features/featured-projects/featured.data'
import ArchiveCard from './ArchiveCard'
import { EARLIER_WORK } from './archive.data'

export default function Archive() {
  return (
    <section
      id="archive"
      className="border-t-2 border-cream px-14 py-[100px] max-md:px-5 max-md:py-10"
    >
      <Eyebrow color="#ffd84a">// ARCHIVE.INDEX</Eyebrow>

      <div className="flex justify-between items-end flex-wrap gap-6">
        <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[36px] sm:text-[48px] lg:text-[66px] xl:text-[88px]">
          + {ARCHIVE_PROJECTS.length} MORE.
          <br />
          <span className="text-muted text-[20px] sm:text-[24px] lg:text-[33px] xl:text-[44px]">
            QUICK STORIES.
          </span>
        </h2>
        <HandNote rotate={-2} color="#7df9c9" fontSize={22} maxWidth={300}>
          ↑ ask about any of these on a call
        </HandNote>
      </div>

      <div className="mt-[60px] grid grid-cols-2 xl:grid-cols-4 gap-6 max-md:gap-3 max-md:mt-6">
        {ARCHIVE_PROJECTS.map((project, i) => (
          <ArchiveCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Earlier work — compact list */}
      <div className="mt-16 max-md:mt-10">
        <p className="font-mono text-[12px] text-muted tracking-[0.18em] mb-4">EARLIER WORK</p>
        <ul className="list-none p-0 m-0 border-t-2 border-cream">
          {EARLIER_WORK.map((item) => (
            <li
              key={item.name}
              className="border-b-2 border-cream py-4 flex flex-wrap gap-x-4 gap-y-1 items-baseline"
            >
              <span className="font-display font-extrabold text-cream text-[18px] tracking-[-0.01em]">
                {item.name}
              </span>
              <span className="font-mono text-[11px] text-muted tracking-[0.14em] uppercase">
                {item.company}
              </span>
              <span className="font-sans text-[14px] text-muted">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
