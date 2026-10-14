import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from '@/shared/components/Nav'
import Footer from '@/shared/components/Footer'
import FloatingBackHome from '@/shared/components/FloatingBackHome'
import MobileContactBar from '@/shared/components/MobileContactBar'
import HomePage from '@/app/page'
import CaseStudyPage from '@/app/work/[slug]/page'
import HirePage from '@/app/hire/page'
import NotFoundPage from '@/app/not-found/page'
import { ROUTES, SITE_NAME, SITE_TITLE, SITE_URL } from '@/site'
import OfflanePage from '@/app/offlane/page'
import OffloudPage from '@/app/offloud/page'

// SPA: keep <title> and canonical in step with the route
function RouteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const route = ROUTES.find((r) => r.path === pathname)
    document.title = route?.title ? `${route.title} · ${SITE_NAME}` : SITE_TITLE
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${pathname}`)
  }, [pathname])
  return null
}

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
      <RouteMeta />
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
      {!ownsChrome && <MobileContactBar />}
      {ownsChrome && <FloatingBackHome />}
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
