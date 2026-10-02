import logo from "../assets/logo.jpg";
import benjiePhoto from "../assets/Benjie.png";
import aizelPhoto from "../assets/Aizel.png";
import hyanileePhoto from "../assets/Hyanilee.png";

function Home({ setActivePage }) {
  const members = [
    {
      name: "BENJIE RUBIO REYES",
      role: "TEAM LEADER",
      photo: benjiePhoto,
    },
    {
      name: "AIZEL ROSE JARDIN",
      role: "ASSISTANT",
      photo: aizelPhoto,
    },
    {
      name: "HYANILEE MYZA SADANG",
      role: "ASSISTANT",
      photo: hyanileePhoto,
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Decision Tree",
      description:
        "A tree-based program that predicts student exam results based on study habits.",
      icon: "🌳",
    },
    {
      number: "02",
      title: "Student Management",
      description:
        "A management system designed to organize student information and records.",
      icon: "🎓",
    },
    {
      number: "03",
      title: "Library Management",
      description:
        "An organized system for managing books, members, borrowing, and returning.",
      icon: "📚",
    },
  ];

  return (
    <main className="home-page">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="home-section">
        <div className="container home-container">

          <div className="home-content">

            <span className="home-label">
              BS INFORMATION TECHNOLOGY
            </span>

            <h1>
              Welcome to Our
              <span>TREESTACK</span>
            </h1>

            <p>
              TREESTACK is an Information Technology student
              organization focused on teamwork, programming,
              technology, and collaborative projects. We work
              together to improve our technical skills and
              explore innovative ideas through technology.
            </p>

            <div className="home-buttons">

              <button
                className="primary-btn"
                onClick={() => setActivePage("Projects")}
              >
                Explore Our Projects
              </button>

              <button
                className="secondary-btn"
                onClick={() => setActivePage("Members")}
              >
                Meet Our Members
              </button>

            </div>

          </div>

          <div className="home-avatar">

            <div className="avatar-glow"></div>

            <div className="avatar-circle">

              <img
                src={logo}
                alt="TREESTACK Logo"
                className="home-logo-image"
              />

            </div>

            <div className="home-orbit orbit-one"></div>
            <div className="home-orbit orbit-two"></div>

          </div>

        </div>
      </section>


      {/* =================================
          ABOUT SECTION
      ================================= */}

      <section className="home-about-section">

        <div className="container">

          <div className="home-section-heading">
            <span>WHO WE ARE</span>

            <h2>
              About <strong>TREESTACK</strong>
            </h2>

            <p>
              We are a team of Information Technology students
              who believe that learning becomes more meaningful
              when we work together.
            </p>
          </div>

          <div className="home-about-grid">

            <div className="home-about-card">

              <div className="home-feature-icon">
                💡
              </div>

              <h3>Innovation</h3>

              <p>
                We explore new ideas and use technology to
                create useful and meaningful projects.
              </p>

            </div>


            <div className="home-about-card">

              <div className="home-feature-icon">
                🤝
              </div>

              <h3>Teamwork</h3>

              <p>
                We combine our different skills and ideas
                to accomplish our shared goals.
              </p>

            </div>


            <div className="home-about-card">

              <div className="home-feature-icon">
                💻
              </div>

              <h3>Technology</h3>

              <p>
                We continuously develop our programming and
                Information Technology skills.
              </p>

            </div>

          </div>

          <button
            className="home-outline-btn"
            onClick={() => setActivePage("About")}
          >
            Learn More About Us →
          </button>

        </div>

      </section>

      {/* =================================
          PROJECTS SECTION
      ================================= */}

      <section className="home-projects-section">

        <div className="container">

          <div className="home-section-heading">

            <span>WHAT WE BUILD</span>

            <h2>
              Featured <strong>Projects</strong>
            </h2>

            <p>
              Explore some of the academic and technology
              projects created through our teamwork.
            </p>

          </div>


          <div className="home-projects-grid">

            {projects.map((project) => (

              <div
                className="home-project-card"
                key={project.number}
              >

                <div className="home-project-top">

                  <span>
                    {project.number}
                  </span>

                  <div className="home-project-icon">
                    {project.icon}
                  </div>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <button
                  onClick={() => setActivePage("Projects")}
                >
                  View Project →
                </button>

              </div>

            ))}

          </div>


          <button
            className="home-outline-btn"
            onClick={() => setActivePage("Projects")}
          >
            Explore All Projects →
          </button>

        </div>

      </section>
{/* =================================
          MEMBERS SECTION
      ================================= */}

      <section className="home-members-section">

        <div className="container">

          <div className="home-section-heading">

            <span>OUR TEAM</span>

            <h2>
              Meet Our <strong>Members</strong>
            </h2>

            <p>
              Three members working together toward one goal.
            </p>

          </div>


          <div className="home-members-grid">

            {members.map((member) => (

              <div
                className="home-member-preview"
                key={member.name}
              >

                <div className="home-member-image">

                  <div className="home-member-glow"></div>

                  <img
                    src={member.photo}
                    alt={member.name}
                  />

                </div>

                <div className="home-member-info">

                  <span>{member.role}</span>

                  <h3>{member.name}</h3>

                </div>

              </div>

            ))}

          </div>


          <button
            className="home-outline-btn"
            onClick={() => setActivePage("Members")}
          >
            View All Members →
          </button>

        </div>

      </section>


      {/* =================================
          OUR SKILLS
      ================================= */}

      <section className="home-skills-section">

        <div className="container">

          <div className="home-section-heading">

            <span>OUR CAPABILITIES</span>

            <h2>
              What We <strong>Do</strong>
            </h2>

          </div>


          <div className="home-skills-grid">

            <div className="home-skill">
              <span>01</span>
              <h3>Programming</h3>
              <p>
                Building programs and applications while
                continuously improving our coding skills.
              </p>
            </div>


            <div className="home-skill">
              <span>02</span>
              <h3>Problem Solving</h3>
              <p>
                Applying logical thinking and algorithms
                to solve programming challenges.
              </p>
            </div>


            <div className="home-skill">
              <span>03</span>
              <h3>Collaboration</h3>
              <p>
                Working together, sharing ideas, and
                supporting each member of the team.
              </p>
            </div>


            <div className="home-skill">
              <span>04</span>
              <h3>Continuous Learning</h3>
              <p>
                Exploring new technologies and improving
                our Information Technology knowledge.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CONTACT CTA
      ================================= */}

      <section className="home-contact-section">

        <div className="container home-contact-box">

          <div>

            <span>
              LET'S CONNECT
            </span>

            <h2>
              Have a project in mind?
            </h2>

            <p>
              Learn more about TREESTACK and connect
              with our team.
            </p>

          </div>

          <button
            className="primary-btn"
            onClick={() => setActivePage("Contact")}
          >
            Contact Us →
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;
