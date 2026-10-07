function Blog() {
  const blogs = [
    {
      title: 'Understanding Spring Boot',
      excerpt:
        'An introduction to building backend applications using Spring Boot.',
      date: '2026',
    },
    {
      title: 'Understanding JWT Authentication',
      excerpt:
        'A basic explanation of JWT-based authentication in Spring Security.',
      date: '2026',
    },
  ]

  return (
    <section id="blog" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Blog
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="border rounded-xl p-6"
            >
              <p className="text-sm text-gray-500 mb-3">
                {blog.date}
              </p>

              <h3 className="text-2xl font-bold mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {blog.excerpt}
              </p>

              <button className="text-blue-600 font-semibold">
                Read More
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog