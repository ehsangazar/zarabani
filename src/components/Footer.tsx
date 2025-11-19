import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary-dark text-white">
      {/* Decorative Elements */}

      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-xl"></div>
                  <div className="relative flex items-center justify-center rounded-3xl bg-white shadow-2xl shadow-primary/30 overflow-hidden">
                    <img 
                      src="/zara-logo.png" 
                      alt="Zara Bani Logo" 
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-1">
                    Zara Bani
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-gradient">
                    Product & UX Designer
                  </p>
                </div>
              </div>
              <p className="mb-8 max-w-md text-neutral leading-relaxed">
                Passionate about creating meaningful, user-centered experiences
                that make a real impact. Let's build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/zara-bani-95a0991a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-transform transition-shadow hover:scale-110 hover:bg-primary hover:shadow-lg hover:shadow-primary/30"
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
                  href="mailto:me@zarabani.design"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-transform transition-shadow hover:scale-110 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/30"
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
                    className="group flex items-center gap-2 text-neutral hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary group-hover:w-6"></span>
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
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-neutral/60">
                    Email
                  </p>
                  <a
                    href="mailto:me@zarabani.design"
                    className="font-medium text-neutral hover:text-gradient"
                  >
                    me@zarabani.design
                  </a>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-neutral/60">
                    Location
                  </p>
                  <p className="font-medium text-neutral">London, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-neutral/60">
                © {currentYear}{" "}
                <span className="font-bold text-white">Zara Bani</span>. All
                rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral/60">Crafted with</span>
                <span className="animate-pulse text-lg">💜</span>
                <span className="text-sm text-neutral/60">and care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
