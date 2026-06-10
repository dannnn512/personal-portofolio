import LoudDefs from '@/features/offloud/LoudDefs'
import AmbientMarks from '@/features/offloud/AmbientMarks'
import Nav from '@/features/offloud/Nav'
import Hero from '@/features/offloud/Hero'
import Manifesto from '@/features/offloud/Manifesto'
// import Roster from '@/features/offloud/Roster'  // kept for when music ships
import RosterComingSoon from '@/features/offloud/RosterComingSoon'
import Footer from '@/features/offloud/Footer'
import './offloud.css'

export default function OffloudPage() {
  return (
    <div className="offloud">
      <LoudDefs />
      <div className="grain" />

      <div className="app">
        <AmbientMarks />
        <Nav />
        <Hero />
        <div className="rule" />
        <Manifesto />
        <div className="rule" />
        <RosterComingSoon />
        <Footer />
      </div>
    </div>
  )
}
