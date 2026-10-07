import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo / Name */}
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Biswajit Dash
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-gray-300 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-gray-300 transition"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-gray-300 transition"
          >
            Projects
          </Link>

          <Link
            to="/blog"
            className="hover:text-gray-300 transition"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar