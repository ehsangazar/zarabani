import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-xl font-bold shadow-xl shadow-indigo-500/30">
                  ZB
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Zara Bani
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gradient">
                    Product & UX Designer
                  </p>
                </div>
              </div>
              <p className="mb-8 max-w-md text-slate-300 leading-relaxed">
                Passionate about creating meaningful, user-centered experiences
                that make a real impact. Let's build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/zara-bani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  <svg
                    className="h-5 w-5 text-white transition-transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="mailto:zara.bani@example.com"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-lg hover:shadow-violet-500/30"
                >
                  <svg
                    className="h-5 w-5 text-white transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-lg font-extrabold text-white">
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/projects", label: "Projects" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="group flex items-center gap-2 text-slate-300 transition-all hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all group-hover:w-6"></span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 text-lg font-extrabold text-white">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:zara.bani@example.com"
                    className="font-medium text-slate-300 transition-all hover:text-gradient"
                  >
                    zara.bani@example.com
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="font-medium text-slate-300">Birmingham, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-slate-400">
                © {currentYear}{" "}
                <span className="font-bold text-white">Zara Bani</span>. All
                rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Crafted with</span>
                <span className="animate-pulse text-lg">💜</span>
                <span className="text-sm text-slate-400">and care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
