import { useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './minimal-site.css'

const linkedin = 'https://www.linkedin.com/in/zara-bani-95a0991a8/'

export default function MinimalShell({ children }: { children: ReactNode }) {
  const [openPath, setOpenPath] = useState<string | null>(null)
  const menuRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()
  const open = openPath === pathname
  const closeMenu = () => setOpenPath(null)
  return (
    <div className={`minimal-site${pathname.startsWith('/blog/') ? ' minimal-site--article' : ''}`}>
      <a className="ms-skip" href="#main-content">Skip to content</a>
      <header className="ms-header">
        <Link className="ms-brand" to="/" aria-label="Zara Bani home" onClick={() => closeMenu()}><img src="/zara-logo.png" alt="" /><span>Zara Bani</span></Link>
        <button ref={menuRef} className="ms-menu" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpenPath(open ? null : pathname)}>{open ? 'Close' : 'Menu'}</button>
        <nav id="site-navigation" className={open ? 'ms-nav is-open' : 'ms-nav'} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { closeMenu(); menuRef.current?.focus() } }}>
          {[['/', 'Home'], ['/projects', 'Case Study'], ['/about', 'About'], ['/blog', 'Writing'], ['/contact', 'Contact'], ['/resume', 'Résumé']].map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => closeMenu()}>{label}</NavLink>)}
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="ms-footer">
        <div><Link to="/">Zara Bani</Link><p>Product & UX designer · London, UK</p></div>
        <div className="ms-footer-links"><a href="mailto:me@zarabani.design">Email ↗</a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  )
}
