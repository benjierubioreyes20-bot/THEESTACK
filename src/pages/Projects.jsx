function Projects() {
  const projects = [
    {
      number: "01",
      title: "Student Management System",
      description:
        "A programming project designed to manage student information, grades, and records using structured data and organized program functions.",
      technology: "Python",
      icon: "🎓",
      type: "MANAGEMENT",
    },
    {
      number: "02",
      title: "Library Management System",
      description:
        "A system concept that manages books, members, borrowing, returning, and library records through an organized application.",
      technology: "Python / OOP",
      icon: "📚",
      type: "SYSTEM",
    },
    {
      number: "03",
      title: "Decision Tree Project",
      description:
        "A data structures project that uses a decision tree to predict whether a student may pass an examination based on study habits.",
      technology: "Python / Data Structures",
      icon: "🌳",
      type: "DATA STRUCTURE",
    },
  ];

  return (
    <section className="projects-section">

      {/* Animated background */}
      <div className="projects-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="projects-container">

        {/* HERO */}

        <div className="projects-hero">

          <div className="projects-heading">

            <span className="projects-label">
              TREESTACK LAB
            </span>

            <h1>
              Ideas Into
              <span> Technology</span>
            </h1>

            <p>
              Explore the academic and technology projects
              created through programming, teamwork,
              problem solving, and continuous learning.
            </p>

            <div className="projects-tech-line">
              <span>CODE</span>
              <i></i>
              <span>BUILD</span>
              <i></i>
              <span>LEARN</span>
            </div>

          </div>


          {/* PROJECT CHARACTER */}

          <div className="project-character">

            <div className="character-glow"></div>

            <div className="character-orbit orbit-a"></div>
            <div className="character-orbit orbit-b"></div>

            <div className="character">

              <div className="robot-antenna">
                <span></span>
              </div>

              <div className="robot-head">

                <div className="robot-ear left"></div>
                <div className="robot-ear right"></div>

                <div className="robot-eyes">
                  <span></span>
                  <span></span>
                </div>

                <div className="robot-screen">
                  <span>&lt;/&gt;</span>
                </div>

              </div>

              <div className="robot-body">

                <div className="robot-chest">
                  <span>T</span>
                </div>

                <div className="robot-code">
                  0101
                </div>

              </div>

              <div className="robot-arm left">
                <span></span>
              </div>

              <div className="robot-arm right">
                <span></span>
              </div>

              <div className="robot-leg left"></div>
              <div className="robot-leg right"></div>

            </div>

            <div className="character-shadow"></div>

            <div className="floating-code code-one">
              {"{ }"}
            </div>

            <div className="floating-code code-two">
              {"</>"}
            </div>

            <div className="floating-code code-three">
              {"01"}
            </div>

          </div>

        </div>


        {/* PROJECT CARDS */}

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-card-glow"></div>

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.type}
                </span>

              </div>


              <div className="project-icon">
                {project.icon}
              </div>


              <div className="project-content">

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>

              </div>


              <div className="project-footer">

                <span className="project-tech">
                  {project.technology}
                </span>

                <span className="project-arrow">
                  →
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* APPROACH */}

        <div className="projects-bottom">

          <div>

            <span className="projects-label">
              OUR APPROACH
            </span>

            <h2>
              Learn Through
              <span> Building</span>
            </h2>

          </div>

          <p>
            Every project gives our members an opportunity
            to practice programming, solve problems,
            collaborate, and apply what we learn in our
            Information Technology studies.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;