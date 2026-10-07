import { Link } from "react-router-dom"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Biswajit Dash
        </h1>

        <h2 className="text-2xl text-gray-700 mb-6">
          Java Backend Developer
        </h2>

        <p className="max-w-2xl text-gray-600 mb-8">
          I build backend applications using Java, Spring Boot,
          REST APIs, and databases.
        </p>

        <div className="flex justify-center gap-4">
          
          <Link
             to="/projects"
             className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
             >
              View Projects
              </Link>

          <Link 
             to="/contact"
             className="border border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition"
          
          > 
          Contact me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero