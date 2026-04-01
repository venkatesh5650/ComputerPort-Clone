import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AiAssistant from './components/AiAssistant'
import Home from './pages/Home'
import CloudVirt from './pages/CloudVirt'
import Security from './pages/Security'
import Contact from './pages/Contact'
import Partners from './pages/Partners'
import Testimonials from './pages/Testimonials'
import Compare from './pages/Compare'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud" element={<CloudVirt />} />
          <Route path="/security" element={<Security />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
              <h1 className="text-gradient" style={{ fontSize: '6rem' }}>404</h1>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Page not found.</p>
              <a href="/"><button className="btn-primary">Back to Home</button></a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <AiAssistant />
    </BrowserRouter>
  )
}

export default App
