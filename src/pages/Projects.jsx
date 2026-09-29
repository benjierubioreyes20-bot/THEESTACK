
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Student Management System",
      description:
        "A programming project designed to manage student information, grades, and records using structured data and organized program functions.",
      technology: "Python",
    },
    {
      number: "02",
      title: "Library Management System",
      description:
        "A system concept that manages books, members, borrowing, returning, and library records through an organized application.",
      technology: "Python / OOP",
    },
    {
      number: "03",
      title: "Decision Tree Project",
      description:
        "A data structures project that uses a decision tree to predict whether a student may pass an examination based on study habits.",
      technology: "Python / Data Structures",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container projects-container">

        {/* Heading */}
        <div className="projects-heading">
          <span className="projects-label">
            OUR PROJECTS
          </span>

          <h1>
            Ideas Into
            <span> Technology</span>
          </h1>

          <p>
            Explore some of the academic and technology projects
            developed through collaboration, programming, and
            continuous learning.
          </p>
        </div>

        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  ACADEMIC PROJECT
                </span>
              </div>

              <div className="project-content">

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>

                <div className="project-footer">

                  <span className="project-tech">
                    {project.technology}
                  </span>

                  <span className="project-arrow">
                    →
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom Information */}
        <div className="projects-bottom">

          <div>
            <span className="projects-label">
              OUR APPROACH
            </span>

            <h2>
              Learn Through Building
            </h2>
          </div>

          <p>
            Every project gives our members an opportunity to
            practice programming, solve problems, collaborate,
            and apply what we learn in our Information Technology
            studies.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Projects;

