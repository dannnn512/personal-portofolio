import Eyebrow from '@/shared/components/Eyebrow'
import { PROCESS_STEPS } from './process.data'

export default function Process() {
  return (
    <section
      id="method"
      className="border-t-2 border-cream px-14 py-[100px] max-sm:px-6 max-sm:py-12"
    >
      <Eyebrow color="#7df9c9">// HOW.IT.GOES</Eyebrow>

      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[64px] lg:text-[88px] xl:text-[120px]">
        BORING.
        <br />
        <span className="text-hot">ON PURPOSE.</span>
      </h2>

      <p className="font-sans text-[20px] text-muted max-w-[560px] mt-6 leading-[1.4]">
        You&apos;ll always know what&apos;s happening. Predictable is a feature.
      </p>

      {/* Steps grid */}
      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 max-sm:mt-12">
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={step.number}
            className="p-7 border-2 border-cream min-h-[240px]"
            style={{ marginLeft: i > 0 ? -2 : 0 }}
          >
            <div className="font-display font-extrabold text-electric leading-[0.9] tracking-[-0.04em] text-[48px] xl:text-[64px]">
              {step.number}
            </div>
            <h3 className="font-display font-extrabold text-cream text-[22px] tracking-[-0.01em] mt-5 mb-3">
              {step.title}
            </h3>
            <p className="font-sans text-[14px] leading-[1.5] text-muted m-0">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
