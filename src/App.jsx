import { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/About'
import Book from './pages/Book'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Performers from './pages/Performers'
import WhyUs from './pages/WhyUs'
import { confettiDots } from './siteData'

const pageTitles = {
  '/': "Kim's Cast of Characters — Unforgettable Entertainment",
  '/about': "About — Kim's Cast of Characters",
  '/performers': "Performers — Kim's Cast of Characters",
  '/why-us': "Why Us — Kim's Cast of Characters",
  '/gallery': "Gallery — Kim's Cast of Characters",
  '/book': "Book — Kim's Cast of Characters",
}

function App() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const hamburgerRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    setIsMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!isMenuOpen) {
        return
      }

      const target = event.target
      if (
        mobileMenuRef.current?.contains(target) ||
        hamburgerRef.current?.contains(target)
      ) {
        return
      }

      setIsMenuOpen(false)
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [location.pathname])

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? pageTitles['/']
  }, [location.pathname])

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  const handleNavigate = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <div className="confetti-bg" aria-hidden="true">
        {confettiDots.map((dot) => (
          <span
            key={dot.id}
            className="dot"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.left}%`,
              bottom: `${-dot.size}px`,
              background: dot.color,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <Nav
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        hamburgerRef={hamburgerRef}
        mobileMenuRef={mobileMenuRef}
        onToggleMenu={toggleMenu}
        onNavigate={handleNavigate}
      />

      <main className="page-main" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/performers" element={<Performers />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
