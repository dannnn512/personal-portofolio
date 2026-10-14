import Highlight from '@/shared/components/Highlight'
import HandDrawnCircle from '@/shared/components/HandDrawnCircle'
import ScribbleArrow from '@/shared/components/ScribbleArrow'
import Button from '@/shared/components/Button'

export default function Hero() {
  return (
    <section className="relative px-14 pt-20 pb-[100px] max-sm:px-6 max-sm:pt-12 max-sm:pb-12">
      {/* Status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-electric text-electric font-mono text-[12px] mb-8 tracking-[0.08em]">
        <span className="w-2 h-2 bg-electric rounded-full flex-shrink-0" aria-hidden />
        4 YEARS · ~20 SHIPPED · 8 SOLO
      </div>

      {/* Name + title */}
      <h1 className="m-0 mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-display font-extrabold text-cream text-[28px] sm:text-[36px] tracking-[-0.02em] leading-none">
          Ziddan Aryasatya Nugraha
        </span>
        <span className="font-mono text-[13px] text-muted tracking-[0.18em]">
          PRODUCT ENGINEER
        </span>
      </h1>

      {/* Monumental headline */}
      <p className="font-display font-extrabold leading-[0.85] tracking-[-0.05em] text-cream uppercase m-0 text-[72px] sm:text-[140px] xl:text-[200px]">
        I&nbsp;BUILD
        <br />
        <Highlight bgColor="#ff5a3c">
          <span className="text-cream">YOUR&nbsp;IDEA</span>
        </Highlight>
        <br />
        <span className="text-muted">FROM&nbsp;ZERO.</span>
      </p>

      {/* Sub-row */}
      <div className="mt-[60px] grid grid-cols-1 gap-6 md:grid-cols-[1.5fr_1fr] md:gap-12 items-end max-sm:mt-10">
        <div className="max-w-[700px]">
          <p className="font-sans text-[22px] font-medium leading-[1.4] text-cream m-0 max-sm:text-lg">
            I build products end to end (
            <span className="text-electric">web, mobile, and backend</span>) as the
            technical partner founders don&apos;t have yet.
          </p>
          <p className="font-sans text-[17px] leading-[1.5] text-muted mt-4 mb-0 max-sm:text-base">
            4 years of experience. Around 20 apps shipped, 8 built solo end to end. Based in
            Indonesia, working remotely.
          </p>
        </div>
        <div className="flex gap-3 justify-start md:justify-end flex-wrap">
          <Button variant="primary-electric" size="md" href="#built">
            SEE THE WORK →
          </Button>
          <Button variant="secondary" size="md" href="/hire">
            REACH OUT
          </Button>
        </div>
      </div>

      {/* Hand-drawn decorations — desktop only */}
      <div className="hidden lg:block">
        <HandDrawnCircle size={500} top={310} left={420} color="#7df9c9" />
        <div
          className="absolute font-hand text-yellow leading-[1.1] max-w-[240px]"
          style={{ top: 540, right: 80, transform: 'rotate(4deg)', fontSize: 28 }}
          aria-hidden
        >
          yes — and I&apos;ll explain
          <br />
          the parts you don&apos;t
          <br />
          understand.
        </div>
        <ScribbleArrow top={560} left={620} width={140} rotate={20} color="#ffd84a" />
      </div>
    </section>
  )
}
