function Services() {
  const services = [
    {
      title: 'Backend Development',
      description:
        'Building backend applications using Java and Spring Boot.',
    },
    {
      title: 'REST API Development',
      description:
        'Designing and developing RESTful APIs for web applications.',
    },
    {
      title: 'Database Development',
      description:
        'Working with relational databases using SQL, JPA, and Hibernate.',
    },
  ]

  return (
    <section id="services" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-100 p-6 rounded-xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services