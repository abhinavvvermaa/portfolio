
import { useState, useEffect , useRef } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const lastY = useRef(0)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollTo = (section) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY
    const diff = currentY - lastY.current

    // always visible near top
    if (currentY < 50) {
      setShow(true)
      lastY.current = currentY
      return
    }

    // ignore very small scroll (fix flicker)
    if (Math.abs(diff) < 10) return

    if (diff > 0) {
      // scrolling DOWN
      setShow(false)
    } else {
      // scrolling UP
      setShow(true)
    }

    lastY.current = currentY
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 navbar-container transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <button
          type="button"
          className="text-xl font-bold tracking-tight text-blue-400 navbar-logo"
          onClick={() => scrollTo('home')}
        >
          AV
        </button>

        <button
          type="button"
          className="md:hidden rounded-lg border border-gray-700 px-3 py-2 text-white hover:bg-gray-800 navbar-mobile-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          className={`${
            open ? 'block' : 'hidden'
          } md:block w-full md:w-auto bg-gray-900 md:bg-transparent mt-4 md:mt-0 navbar-mobile-menu`}
        >
          <ul className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-medium text-gray-200 hover:text-blue-400 transition navbar-item"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}