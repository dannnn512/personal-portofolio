import Highlight from '@/shared/components/Highlight'
import HandDrawnCircle from '@/shared/components/HandDrawnCircle'
import ScribbleArrow from '@/shared/components/ScribbleArrow'
import HandNote from '@/shared/components/HandNote'
import Button from '@/shared/components/Button'
import Eyebrow from '@/shared/components/Eyebrow'

export default function NotFoundPage() {
  return (
    <section className="relative px-14 pt-20 pb-[100px] max-sm:px-6 max-sm:pt-12 max-sm:pb-12 min-h-[80vh] flex flex-col justify-center">
      <Eyebrow color="#ff5a3c">// 404.NOT.HERE</Eyebrow>

      <h1 className="font-display font-extrabold leading-[0.85] tracking-[-0.05em] text-cream uppercase m-0 text-[120px] sm:text-[220px] xl:text-[280px]">
        <Highlight bgColor="#ff5a3c">
          <span className="text-cream">404.</span>
        </Highlight>
      </h1>

      <p className="font-display font-extrabold uppercase tracking-[-0.03em] text-cream mt-8 mb-0 text-[36px] sm:text-[56px] xl:text-[72px] leading-[0.95] max-w-[900px]">
        Zi hasn&apos;t built
        <br />
        this yet.
      </p>

      <p className="font-sans text-[20px] font-medium leading-[1.4] text-muted mt-6 mb-0 max-w-[600px]">
        Stay tuned <span className="text-cream">:)</span>
      </p>

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <Button variant="primary-electric" size="md" href="/">
          ← BACK HOME
        </Button>
        <HandNote rotate={-3} color="#ffd84a" fontSize={26} style={{ marginLeft: 16 }}>
          or just refresh, idk
        </HandNote>
      </div>

      {/* Hand-drawn decorations — desktop only */}
      <div className="hidden lg:block">
        <HandDrawnCircle size={420} top={140} left={520} color="#7df9c9" />
        <ScribbleArrow top={420} left={720} width={140} rotate={-12} color="#ffd84a" />
      </div>
    </section>
  )
}
