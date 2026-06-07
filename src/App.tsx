import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '@/shared/components/Nav'
import Footer from '@/shared/components/Footer'
import HomePage from '@/app/page'
import CaseStudyPage from '@/app/work/[slug]/page'
import HirePage from '@/app/hire/page'
import NotFoundPage from '@/app/not-found/page'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
