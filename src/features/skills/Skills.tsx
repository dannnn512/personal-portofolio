import Eyebrow from '@/shared/components/Eyebrow'

const SKILL_GROUPS = [
  { title: 'MOBILE', items: ['React Native', 'Flutter'] },
  { title: 'WEB', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { title: 'BACKEND', items: ['Go', 'Elixir', 'PostgreSQL', 'Firebase', 'AWS'] },
  {
    title: 'WORKFLOW',
    items: ['AI-assisted engineering with Claude Code', 'Spec-driven development', 'Code review'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t-2 border-cream px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#ff5a3c">// STACK.TOOLS</Eyebrow>

      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[48px] lg:text-[66px] xl:text-[88px]">
        WHAT I
        <br />
        <span className="text-muted">BUILD WITH.</span>
      </h2>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-sm:mt-12">
        {SKILL_GROUPS.map((group, i) => (
          <div
            key={group.title}
            className="p-7 border-2 border-cream"
            style={{ marginLeft: i > 0 ? -2 : 0 }}
          >
            <h3 className="font-display font-extrabold text-electric text-[22px] tracking-[-0.01em] m-0 mb-4">
              {group.title}
            </h3>
            <ul className="list-none p-0 m-0 font-sans text-[15px] leading-[1.7] text-cream">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
