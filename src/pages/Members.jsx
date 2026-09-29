
import benjiePhoto from "../assets/benjie.jpg";
import aizelPhoto from "../assets/Aizel.jpg";
import hyanileePhoto from "../assets/Hyanilee.jpg";



function Members() {
  const members = [
    {
      photo: benjiePhoto,
      name: "Benjie Rubio Reyes",
      role: "Team Leader",
      description:
        "Helps guide the team, organize tasks, and contribute ideas to our academic and technology projects.",
      skills: [
        "Python",
        "Problem Solving",
        "Teamwork",
      ],
    },
    {
      photo: aizelPhoto,
      name: "Aizel Rose Jardin",
      role: "Assistant",
      description:
        "Supports the team with project tasks, ideas, documentation, and collaborative technology activities.",
      skills: [
        "HTML & CSS",
        "Communication",
        "Teamwork",
      ],
    },
    {
      photo: hyanileePhoto,
      name: "Hyanilee Myza Sadang",
      role: "Assistant",
      description:
        "Contributes to research, project activities, and collaborative tasks while developing technology skills.",
      skills: [
        "Research",
        "Basic Programming",
        "Teamwork",
      ],
    },
  ];

  return (
    <section className="members-section">
      <div className="container members-container">

        {/* Heading */}
        <div className="members-heading">
          <span className="members-label">
            OUR TEAM
          </span>

          <h1>
            Meet Our
            <span> Members</span>
          </h1>

          <p>
            Get to know the three students behind THREESTACK.
            We work together, share ideas, and develop our
            Information Technology skills through projects
            and continuous learning.
          </p>
        </div>

        {/* Members */}
        <div className="members-grid">

          {members.map((member, index) => (
            <article
              className="member-card"
              key={member.name}
            >

              {/* Card Top */}
              <div className="member-card-top">

                <div className="member-avatar">
                  <img
                    src={member.photo}
                    alt={`${member.name} profile`}
                  />
                </div>

                <span className="member-number">
                  0{index + 1}
                </span>

              </div>

              {/* Member Information */}
              <div className="member-info">

                <span className="member-role">
                  {member.role}
                </span>

                <h2>
                  {member.name}
                </h2>

                <p>
                  {member.description}
                </p>

              </div>

              {/* Skills */}
              <div className="member-skills">

                {member.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

              {/* Bottom Line */}
              <div className="member-card-line"></div>

              <span className="member-brand">
                THREESTACK
              </span>

            </article>
          ))}

        </div>

        {/* Team Statement */}
        <div className="members-bottom">

          <div>
            <span className="members-label">
              OUR TEAMWORK
            </span>

            <h2>
              Three Members. One Goal.
            </h2>
          </div>

          <p>
            We combine our different skills, ideas, and
            experiences to complete academic projects and
            learn more about Information Technology together.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Members;
