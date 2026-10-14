import Highlight from '@/shared/components/Highlight'
import Button from '@/shared/components/Button'
import HandNote from '@/shared/components/HandNote'
import { SERVICES } from './hire.data'

export default function Hire() {
  return (
    <section
      className="border-t-2 border-cream px-14 py-[120px] max-md:px-5 max-md:py-11"
    >
      {/* Status pill */}
      <div className="inline-block bg-electric text-ink px-4 py-2 font-mono text-[13px] font-semibold tracking-[0.14em] mb-8 max-sm:text-[10px] max-sm:tracking-[0.1em] max-sm:px-2.5 max-sm:py-1.5 max-sm:mb-5">
        <span aria-hidden>● </span>OPEN TO NEW PRODUCTS &amp; TECHNICAL PARTNERSHIPS
      </div>

      {/* Monumental headline */}
      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.85] tracking-[-0.05em] text-[88px] xl:text-[180px] max-sm:text-[56px]">
        LET&apos;S
        <br />
        BUILD
        <br />
        <Highlight bgColor="#ff5a3c">
          <span className="text-cream">YOURS.</span>
        </Highlight>
      </h2>

      {/* Services grid — swipeable rail on phones */}
      <div className="mt-20 grid md:grid-cols-3 max-md:flex max-md:gap-2.5 max-md:overflow-x-auto max-md:snap-x max-md:no-scrollbar max-md:-mx-5 max-md:px-5 max-md:scroll-pl-5 max-md:mt-8">
        {SERVICES.map((service, i) => (
          <div
            key={service.title}
            className={`p-8 border-2 border-cream max-md:flex-none max-md:w-[230px] max-md:snap-start max-md:p-4 ${i > 0 ? 'md:-ml-0.5' : ''}`}
          >
            {/* Accent strip */}
            <div
              className="mb-4 h-1"
              style={{ width: 36, background: service.accentColor }}
            />
            <h3 className="font-display font-extrabold text-cream text-[32px] tracking-[-0.02em] m-0 max-md:text-[20px]">
              {service.title}
            </h3>
            <p className="font-sans text-[16px] leading-[1.5] text-muted mt-3.5 mb-0 max-md:text-[13px] max-md:mt-1.5">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA row — on phones WhatsApp + email live in the sticky contact bar */}
      <div className="mt-14 flex gap-3 items-center flex-wrap max-md:mt-5">
        <Button
          variant="primary-hot"
          size="lg"
          href="https://wa.me/6285817000448"
          className="max-md:hidden"
        >
          MESSAGE ON WHATSAPP →
        </Button>
        <Button variant="secondary" size="lg" href="mailto:arya.ziddan7@gmail.com" className="max-md:hidden">
          EMAIL ME
        </Button>
        <Button variant="secondary" size="lg" href="/cv.pdf" className="max-md:w-full max-md:py-4 max-md:text-[15px]">
          DOWNLOAD CV ↓
        </Button>
        <HandNote rotate={-3} color="#ffd84a" fontSize={26} style={{ marginLeft: 16 }} className="max-md:hidden">
          ← async-first, but I do reply
        </HandNote>
      </div>
    </section>
  )
}
