
import { useEffect, useState } from 'react'
import { getAbout, getProfileImageUrl } from '../services/api'

function About() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadAbout() {
      try {
        // Fetch About details from Spring Boot
        const data = await getAbout()

        setAbout(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadAbout()
  }, [])

  if (loading) {
    return <p className="text-center py-20">Loading About section...</p>
  }

  if (error) {
    return (
      <p className="text-center py-20 text-red-600">
        Failed to load About details: {error}
      </p>
    )
  }

  if (!about) {
    return <p className="text-center py-20">About details not found.</p>
  }

  const imageUrl = getProfileImageUrl(about.profileImage)

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-8">
          {about.title || 'About Me'}
        </h2>

        {imageUrl && (
          <div className="flex justify-center mb-8">
            <img
              src={imageUrl}
              alt="My profile"
              className="w-40 h-40 rounded-full object-cover shadow-md"
            />
          </div>
        )}

        {about.shortDescription && (
          <p className="text-xl text-center mb-4">
            {about.shortDescription}
          </p>
        )}

        <p className="text-lg text-gray-600 leading-8">
          {about.description}
        </p>

        {about.location && (
          <p className="mt-4 text-gray-600">
            Location: {about.location}
          </p>
        )}

        {about.email && (
          <p className="mt-2 text-gray-600">
            Email: {about.email}
          </p>
        )}

        {about.resumeUrl && (
          <div className="mt-6">
            <a
              href={about.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              View Resume
            </a>
          </div>
        )}

      </div>
    </section>
  )
}

export default About
