import Hero from '@/features/hero/Hero'
import Stats from '@/features/stats/Stats'
import FeaturedProjects from '@/features/featured-projects/FeaturedProjects'
import Archive from '@/features/archive/Archive'
import Experience from '@/features/experience/Experience'
import Process from '@/features/process/Process'
import Now from '@/features/now/Now'
import Hire from '@/features/hire/Hire'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Experience />
      <Process />
      <Hire />
      <Now />
      <Archive />
    </>
  )
}
