import Highlight from '@/shared/components/Highlight'
import Button from '@/shared/components/Button'
import HandNote from '@/shared/components/HandNote'
import { SERVICES } from './hire.data'

export default function Hire() {
  return (
    <section
      className="border-t-2 border-cream px-14 py-[120px] max-sm:px-6 max-sm:py-12"
    >
      {/* Status pill */}
      <div className="inline-block bg-electric text-ink px-4 py-2 font-mono text-[13px] font-semibold tracking-[0.14em] mb-8">
        ● WORKSHOP OPEN · Q2–Q3 2026
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

      {/* Services grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 max-sm:mt-12">
        {SERVICES.map((service, i) => (
          <div
            key={service.title}
            className="p-8 border-2 border-cream"
            style={{ marginLeft: i > 0 ? -2 : 0 }}
          >
            {/* Accent strip */}
            <div
              className="mb-4 h-1"
              style={{ width: 36, background: service.accentColor }}
            />
            <h3 className="font-display font-extrabold text-cream text-[32px] tracking-[-0.02em] m-0">
              {service.title}
            </h3>
            <p className="font-sans text-[16px] leading-[1.5] text-muted mt-3.5 mb-0">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mt-14 flex gap-3 items-center flex-wrap max-sm:mt-10">
        <Button
          variant="primary-hot"
          size="lg"
          href="https://wa.me/6285817000448?text=Hi%20Ziddan!%20I%20have%20something%20to%20build."
        >
          MESSAGE ON WHATSAPP →
        </Button>
        <Button variant="secondary" size="lg" href="/cv.pdf">
          DOWNLOAD CV ↓
        </Button>
        <HandNote rotate={-3} color="#ffd84a" fontSize={26} style={{ marginLeft: 16 }}>
          ← async-first, but I do reply
        </HandNote>
      </div>
    </section>
  )
}
