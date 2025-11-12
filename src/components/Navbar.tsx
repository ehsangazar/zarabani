import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-purple-100/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <Link to="/" className="group flex items-center space-x-3">
          <div className="rounded-full bg-gradient-to-br from-purple-600 to-purple-400 p-2 text-white shadow-lg shadow-purple-500/20 transition-transform group-hover:-translate-y-0.5">
            <span className="text-sm font-semibold">ZB</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-gray-900">Zara Bani</span>
            <span className="text-xs font-medium uppercase tracking-wide text-purple-600">Product & UX Designer</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center space-x-2 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href="https://linkedin.com/in/zara-bani"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:from-purple-500 hover:to-purple-400 hover:-translate-y-0.5"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-purple-200 p-2 text-purple-700 transition-colors hover:bg-purple-50 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-purple-100 bg-white/95 shadow-lg shadow-purple-200/50 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-purple-600 text-white' : 'text-slate-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href="https://linkedin.com/in/zara-bani"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-purple-400/30"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
