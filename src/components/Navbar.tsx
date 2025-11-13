import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-indigo-500/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="group flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 opacity-75 blur group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-2.5 text-white shadow-xl transition-transform group-hover:scale-105">
              <span className="text-base font-bold">ZB</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Zara Bani
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gradient">
              Product & UX Designer
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center space-x-1.5 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-700 hover:text-indigo-700"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/30"></span>
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-xl bg-slate-100 opacity-0 transition-opacity hover:opacity-100"></span>
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
          <a
            href="https://linkedin.com/in/zara-bani"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-3 overflow-hidden rounded-xl px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-600"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
            <span className="relative flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Let's Connect
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative rounded-xl border border-indigo-200/50 bg-white/50 p-2.5 backdrop-blur-sm transition-all hover:border-indigo-300 hover:bg-white/80 md:hidden"
        >
          <svg
            className="h-5 w-5 text-indigo-700 transition-transform group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="glass-dark border-t border-white/10 shadow-2xl md:hidden">
          <div className="space-y-1.5 px-4 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3.5 text-sm font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30"
                      : "text-slate-100 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://linkedin.com/in/zara-bani"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-600 px-4 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-rose-500/30"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
