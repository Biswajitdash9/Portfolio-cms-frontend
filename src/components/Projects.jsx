function Projects() {
  const projects = [
    {
      title: 'Employee Management System',
      description:
        'A backend application for managing employees, roles, attendance, salary, and authentication.',
      technologies: 'Java, Spring Boot, Spring Data JPA, Spring Security, Oracle',
    },
    {
      title: 'Portfolio CMS',
      description:
        'A custom portfolio management system where portfolio content can be managed through an admin panel.',
      technologies:
        'Java, Spring Boot, PostgreSQL, JWT, React, Tailwind CSS',
    },
  ]

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border rounded-xl p-6 shadow"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500">
                <strong>Technologies:</strong>{' '}
                {project.technologies}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects