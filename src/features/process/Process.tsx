import Eyebrow from '@/shared/components/Eyebrow'
import { PROCESS_STEPS } from './process.data'

export default function Process() {
  return (
    <section
      id="method"
      className="border-t-2 border-cream px-14 py-[100px] max-md:px-5 max-md:py-10"
    >
      <Eyebrow color="#7df9c9">// HOW.IT.GOES</Eyebrow>

      <h2 className="font-display font-extrabold text-cream m-0 uppercase leading-[0.9] tracking-[-0.04em] text-[36px] sm:text-[64px] lg:text-[88px] xl:text-[120px]">
        BORING.
        <br className="max-sm:hidden" />{' '}
        <span className="text-hot">ON PURPOSE.</span>
      </h2>

      <p className="font-sans text-[20px] text-muted max-w-[560px] mt-6 leading-[1.4] max-sm:text-[15px] max-sm:mt-3">
        You&apos;ll always know what&apos;s happening. Predictable is a feature.
      </p>

      {/* Steps grid */}
      <div className="mt-[60px] grid grid-cols-2 xl:grid-cols-4 border-l-2 border-t-2 border-cream max-sm:mt-6">
        {PROCESS_STEPS.map((step) => (
          <div
            key={step.number}
            className="p-7 border-r-2 border-b-2 border-cream min-h-[240px] max-sm:p-3.5 max-sm:min-h-0"
          >
            <div className="font-display font-extrabold text-electric leading-[0.9] tracking-[-0.04em] text-[28px] sm:text-[48px] xl:text-[64px]">
              {step.number}
            </div>
            <h3 className="font-display font-extrabold text-cream text-[22px] tracking-[-0.01em] mt-5 mb-3 max-sm:text-[15px] max-sm:mt-2 max-sm:mb-1">
              {step.title}
            </h3>
            <p className="font-sans text-[14px] leading-[1.5] text-muted m-0 max-sm:text-[12px] max-sm:leading-[1.45]">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
