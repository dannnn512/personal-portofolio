const STATS: { value: string; label: string; sub?: string }[] = [
  { value: '4', label: 'YEARS SHIPPING' },
  { value: '~20', label: 'APPS SHIPPED' },
  { value: '8', label: 'BUILT SOLO END TO END' },
]

export default function Stats() {
  return (
    <section className="border-y-2 border-cream grid grid-cols-3 py-10 px-14 max-md:p-0">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-7 max-md:px-4 max-md:py-4 ${i < STATS.length - 1 ? 'border-r-2 border-cream' : ''}`}
        >
          <div className="font-display font-extrabold text-cream leading-none tracking-[-0.04em] text-[34px] sm:text-[64px] xl:text-[88px]">
            {stat.value}
          </div>
          <div className="font-mono text-[12px] text-muted tracking-[0.18em] mt-1 max-sm:text-[9px] max-sm:tracking-[0.12em]">
            {stat.label}
            {stat.sub && <span className="block text-electric opacity-70 mt-0.5">{stat.sub}</span>}
          </div>
        </div>
      ))}
    </section>
  )
}
