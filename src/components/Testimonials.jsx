function Testimonials() {
  const testimonials = [
    {
      name: 'Client Name',
      role: 'Project Client',
      message:
        'Great experience working together on the project.',
    },
    {
      name: 'Colleague Name',
      role: 'Developer',
      message:
        'A dedicated developer with a strong interest in backend development.',
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 px-8 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-600 italic mb-6">
                "{testimonial.message}"
              </p>

              <h3 className="font-bold">
                {testimonial.name}
              </h3>

              <p className="text-sm text-gray-500">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials