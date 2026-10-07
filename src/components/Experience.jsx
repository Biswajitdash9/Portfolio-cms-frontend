function Experience() {
  const experiences = [
    {
      title: 'Java Backend Developer — Project Development',
      period: '2025 - Present',
      description:
        'Developing backend applications using Java, Spring Boot, Spring Data JPA, Spring Security, REST APIs, and databases.',
    },
    {
      title: 'Customer Support Associate',
      period: '2024',
      description:
        'Worked at Tech Mahindra, Bhubaneswar, providing customer support and resolving customer queries.',
    },
  ]

  return (
    <section id="experience" className="py-20 px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-2xl font-bold mb-2">
                {experience.title}
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                {experience.period}
              </p>

              <p className="text-gray-600">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience