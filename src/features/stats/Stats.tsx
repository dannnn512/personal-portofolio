const STATS: { value: string; label: string; sub?: string }[] = [
  { value: '4', label: 'YEARS SHIPPING' },
  { value: '~20', label: 'APPS SHIPPED' },
  { value: '8', label: 'BUILT SOLO END TO END' },
]

const borderClasses: Record<number, string> = {
  0: 'border-b-2 sm:border-b-0 sm:border-r-2 border-cream',
  1: 'border-b-2 sm:border-b-0 sm:border-r-2 xl:border-r-2 border-cream',
  2: '',
}

export default function Stats() {
  return (
    <section className="border-y-2 border-cream grid grid-cols-1 sm:grid-cols-3 py-10 px-14 max-sm:px-6">
      {STATS.map((stat, i) => (
        <div key={stat.label} className={`px-7 max-sm:px-0 max-sm:py-6 ${borderClasses[i]}`}>
          <div className="font-display font-extrabold text-cream leading-none tracking-[-0.04em] text-[64px] xl:text-[88px]">
            {stat.value}
          </div>
          <div className="font-mono text-[12px] text-muted tracking-[0.18em] mt-1">
            {stat.label}
            {stat.sub && <span className="block text-electric opacity-70 mt-0.5">{stat.sub}</span>}
          </div>
        </div>
      ))}
    </section>
  )
}
