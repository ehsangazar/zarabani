import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zara Bani</h3>
            <p className="text-gray-400 leading-relaxed">
              Product / UX Designer passionate about creating meaningful, user-centered experiences that make a real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:zara.bani@example.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Email: zara.bani@example.com
              </a>
              <a
                href="https://linkedin.com/in/zara-bani"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zara Bani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
