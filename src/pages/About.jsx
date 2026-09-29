
function About() {
  return (
    <section className="about-section">
      <div className="container about-container">

        {/* Heading */}
        <div className="about-heading">
          <span className="about-label">
            ABOUT THEESTACK
          </span>

          <h1>
            Growing Together Through
            <span> Technology</span>
          </h1>

          <p>
            THEESTACK is an Information Technology student
            organization focused on learning, collaboration,
            creativity, and developing practical technology
            skills through academic and collaborative projects.
          </p>
        </div>

        {/* Main Cards */}
        <div className="about-grid">

          <article className="about-card">
            <div className="about-icon">🎯</div>

            <h2>Our Mission</h2>

            <p>
              To encourage students to improve their technical
              knowledge, work together on meaningful projects,
              and develop skills that can be applied in real-world
              technology environments.
            </p>
          </article>

          <article className="about-card">
            <div className="about-icon">🚀</div>

            <h2>Our Vision</h2>

            <p>
              To build a collaborative student community that
              promotes innovation, continuous learning, and
              responsible use of technology.
            </p>
          </article>

          <article className="about-card">
            <div className="about-icon">💡</div>

            <h2>What We Do</h2>

            <p>
              We explore programming, data structures, software
              development, web technologies, and other areas of
              Information Technology through academic and
              collaborative projects.
            </p>
          </article>

        </div>

        {/* Goal Section */}
        <div className="about-bottom">

          <div className="about-text">
            <span className="about-label">
              OUR GOAL
            </span>

            <h2>
              Learn. Build. Collaborate.
            </h2>

            <p>
              Our organization provides an environment where
              students can share ideas, practice their skills,
              solve problems, and learn from one another.
              Through teamwork and continuous learning, we aim
              to become more confident and capable technology
              students.
            </p>
          </div>

          <div className="about-stat-card">

            <div className="stat-number">
              3
            </div>

            <div className="stat-title">
              Organization Members
            </div>

            <p>
              Working together toward shared learning,
              programming, and technology goals.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
