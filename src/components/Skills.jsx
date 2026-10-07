function Skills() {
  const skills = [
    'Java',
    'Spring Boot',
    'Spring Data JPA',
    'Spring Security',
    'REST APIs',
    'Microservices',
    'SQL',
    'Oracle',
    'MySQL',
    'Git',
    'Docker',
  ]

  return (
    <section id="skills" className="py-20 px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white px-6 py-3 rounded-lg shadow"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills