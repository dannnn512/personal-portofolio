import ChalkDefs from '@/features/offlane/ChalkDefs'
import AmbientMarks from '@/features/offlane/AmbientMarks'
import Nav from '@/features/offlane/Nav'
import Hero from '@/features/offlane/Hero'
import Manifesto from '@/features/offlane/Manifesto'
import Experiments from '@/features/offlane/Experiments'
import Footer from '@/features/offlane/Footer'
import './offlane.css'

const CHALK_INTENSITY = 35
const ACCENT = '#ff5a3c'
const SWIRL_OPACITY = 0.82
const DUST_OPACITY = +(0.012 + (CHALK_INTENSITY / 100) * 0.085).toFixed(3)

export default function OfflanePage() {
  return (
    <div className="offlane" style={{ ['--accent' as string]: ACCENT }}>
      <ChalkDefs intensity={CHALK_INTENSITY} />
      <div className="dust" style={{ opacity: DUST_OPACITY }} />

      <div className="app">
        <AmbientMarks />
        <Nav />
        <Hero slashColor="var(--accent)" swirlOpacity={SWIRL_OPACITY} />
        <div className="chalk-rule" />
        <Manifesto />
        <div className="chalk-rule" />
        <Experiments />
        <Footer />
      </div>
    </div>
  )
}
