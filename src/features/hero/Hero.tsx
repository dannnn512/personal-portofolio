import Highlight from '@/shared/components/Highlight'
import HandDrawnCircle from '@/shared/components/HandDrawnCircle'
import ScribbleArrow from '@/shared/components/ScribbleArrow'
import Button from '@/shared/components/Button'

export default function Hero() {
  return (
    <section className="relative px-14 pt-20 pb-[100px] max-sm:px-6 max-sm:pt-12 max-sm:pb-12">
      {/* Status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-electric text-electric font-mono text-[12px] mb-8 tracking-[0.08em]">
        <span className="w-2 h-2 bg-electric rounded-full flex-shrink-0" />
        4 YEARS · 15+ SHIPPED
      </div>

      {/* Monumental headline */}
      <h1 className="font-display font-extrabold leading-[0.85] tracking-[-0.05em] text-cream uppercase m-0 text-[72px] sm:text-[140px] xl:text-[200px]">
        I&nbsp;BUILD
        <br />
        <Highlight bgColor="#ff5a3c">
          <span className="text-cream">YOUR&nbsp;IDEA</span>
        </Highlight>
        <br />
        <span className="text-muted">FROM&nbsp;ZERO.</span>
      </h1>

      {/* Sub-row */}
      <div className="mt-[60px] grid grid-cols-1 gap-6 md:grid-cols-[1.5fr_1fr] md:gap-12 items-end max-sm:mt-10">
        <p className="font-sans text-[22px] font-medium leading-[1.4] text-cream m-0 max-w-[700px] max-sm:text-lg">
          Founding engineer for founders without a tech team.{' '}
          <span className="text-electric">Web, mobile, backend, infra</span> —
          you name it, I&apos;ll produce.
        </p>
        <div className="flex gap-3 justify-start md:justify-end flex-wrap">
          <Button variant="primary-electric" size="md" href="/hire">
            START A PROJECT →
          </Button>
          <Button variant="secondary" size="md" href="#built">
            SEE THE WORK
          </Button>
        </div>
      </div>

      {/* Hand-drawn decorations — desktop only */}
      <div className="hidden lg:block">
        <HandDrawnCircle size={500} top={250} left={420} color="#7df9c9" />
        <div
          className="absolute font-hand text-yellow leading-[1.1] max-w-[240px]"
          style={{ top: 480, right: 80, transform: 'rotate(4deg)', fontSize: 28 }}
          aria-hidden
        >
          yes — even the
          <br />
          parts you don&apos;t
          <br />
          understand!
        </div>
        <ScribbleArrow top={500} left={620} width={140} rotate={20} color="#ffd84a" />
      </div>
    </section>
  )
}
