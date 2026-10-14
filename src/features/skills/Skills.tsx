import Eyebrow from '@/shared/components/Eyebrow'

const SKILL_GROUPS = [
  { title: 'MOBILE', items: ['React Native', 'Flutter'] },
  { title: 'WEB', items: ['React', 'Next.js', 'Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS'] },
  { title: 'BACKEND', items: ['Go', 'Elixir', 'PHP', 'PostgreSQL', 'Firebase', 'AWS'] },
  {
    title: 'WORKFLOW',
    items: [
      'Translating business needs into technical plans',
      'AI-assisted engineering with Claude Code',
      'Spec-driven development',
      'Code review',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t-2 border-cream px-14 py-[100px] max-md:px-5 max-md:py-10"
    >
      <Eyebrow color="#ff5a3c">// STACK.TOOLS</Eyebrow>

      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[36px] sm:text-[48px] lg:text-[66px] xl:text-[88px]">
        WHAT I
        <br className="max-sm:hidden" />{' '}
        <span className="text-muted">BUILD WITH.</span>
      </h2>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:border-l-2 sm:border-t-2 border-cream max-sm:mt-6 max-sm:gap-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="p-7 sm:border-r-2 sm:border-b-2 border-cream max-sm:p-0">
            <h3 className="font-display font-extrabold text-electric text-[22px] tracking-[-0.01em] m-0 mb-4 max-sm:font-mono max-sm:font-medium max-sm:text-[11px] max-sm:tracking-[0.18em] max-sm:mb-2">
              {group.title}
            </h3>
            <ul className="list-none p-0 m-0 font-sans text-[15px] leading-[1.7] text-cream max-sm:flex max-sm:flex-wrap max-sm:gap-1.5 max-sm:text-[13px] max-sm:leading-snug">
              {group.items.map((item) => (
                <li key={item} className="max-sm:border-[1.5px] max-sm:border-cream max-sm:px-2.5 max-sm:py-1.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
