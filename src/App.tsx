import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from '@/shared/components/Nav'
import Footer from '@/shared/components/Footer'
import HomePage from '@/app/page'
import CaseStudyPage from '@/app/work/[slug]/page'
import HirePage from '@/app/hire/page'
import NotFoundPage from '@/app/not-found/page'
import OfflanePage from '@/app/offlane/page'
import OffloudPage from '@/app/offloud/page'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Shell() {
  const location = useLocation()
  const ownsChrome =
    location.pathname.startsWith('/offlane') || location.pathname.startsWith('/offloud')

  return (
    <>
      <ScrollToTop />
      {!ownsChrome && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/offlane" element={<OfflanePage />} />
          <Route path="/offloud" element={<OffloudPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!ownsChrome && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
