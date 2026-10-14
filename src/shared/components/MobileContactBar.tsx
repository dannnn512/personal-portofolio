// Phones only: keeps WhatsApp + email one tap away while scrolling
export default function MobileContactBar() {
  return (
    <>
      {/* Spacer so the fixed bar never covers the footer */}
      <div aria-hidden className="md:hidden h-[84px]" />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-[1.6fr_1fr] gap-2 px-3 pt-2.5 pb-3 bg-bg border-t-2 border-cream">
        <a
          href="https://wa.me/6285817000448"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center min-h-[50px] bg-hot-deep text-cream font-display font-extrabold uppercase text-[15px] tracking-[0.03em] hover:bg-[#a81a00] transition-colors"
        >
          WHATSAPP →
        </a>
        <a
          href="mailto:arya.ziddan7@gmail.com"
          className="flex items-center justify-center min-h-[50px] border-2 border-cream text-cream font-display font-extrabold uppercase text-[15px] hover:bg-cream/10 transition-colors"
        >
          EMAIL
        </a>
      </div>
    </>
  )
}
