import { useState } from "react";
import benjiePhoto from "../assets/Benjie.png";
import aizelPhoto from "../assets/Aizel.png";
import hyanileePhoto from "../assets/Hyanilee.png";

function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      id: 1,
      name: "BENJIE RUBIO REYES",
      role: "TEAM LEADER",
      photo: benjiePhoto,
      description:
        "Helps guide the team, organize tasks, and contribute ideas to academic and technology projects. Always ready to learn, solve problems, and support the team's goals.",
      skills: ["Python", "Problem Solving", "Teamwork"],
    },
    {
      id: 2,
      name: "AIZEL ROSE JARDIN",
      role: "ASSISTANT",
      photo: aizelPhoto,
      description:
        "Supports the team during academic projects and collaborative activities. Contributes ideas, assists with tasks, and continues developing technical and communication skills.",
      skills: ["Programming", "Communication", "Teamwork"],
    },
    {
      id: 3,
      name: "HYANILEE MYZA SADANG",
      role: "ASSISTANT",
      photo: hyanileePhoto,
      description:
        "Works together with the team in completing academic projects and technology activities. Helps organize ideas, solve problems, and contribute to the team's shared goals.",
      skills: ["Programming", "Creativity", "Teamwork"],
    },
  ];

  /* =========================
     OPEN MEMBER DETAILS
  ========================= */
  const handleMemberClick = (member) => {
    setSelectedMember(member);

    setTimeout(() => {
      document
        .querySelector(".ts-member-details")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  /* =========================
     BACK TO MEMBERS
  ========================= */
  const backToMembers = () => {
    setSelectedMember(null);

    setTimeout(() => {
      document
        .querySelector(".ts-members-cards")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  return (
    <section className="ts-members-page">

      {/* BACKGROUND GLOW */}
      <div className="ts-bg-glow ts-bg-glow-one"></div>
      <div className="ts-bg-glow ts-bg-glow-two"></div>

      <div className="ts-members-container">

        {/* =========================
            PAGE HEADER
        ========================= */}
        <div className="ts-members-header">

          <span className="ts-members-label">
            OUR TEAM
          </span>

          <h1>
            Meet Our <span>Members</span>
          </h1>

          <p>
            Get to know the three students behind TREESTACK.
            We work together, share ideas, and develop our
            Information Technology skills through projects
            and continuous learning.
          </p>

        </div>

        {/* =========================
            MEMBER CARDS
        ========================= */}
        {!selectedMember && (
          <div className="ts-members-cards">

            {members.map((member) => (
              <article
                key={member.id}
                className="ts-member-card"
                onClick={() => handleMemberClick(member)}
              >

                {/* MEMBER NUMBER */}
                <div className="ts-member-number">
                  0{member.id}
                </div>

                {/* IMAGE AREA */}
                <div className="ts-member-image-area">

                  {/* BLUE FLAME */}
                  <div className="ts-flame">

                    <div className="ts-flame-core"></div>

                    <div className="ts-flame-inner"></div>

                    <div className="ts-flame-tip"></div>

                    <div className="ts-flame-orb orb-one"></div>

                    <div className="ts-flame-orb orb-two"></div>

                    <div className="ts-flame-orb orb-three"></div>

                  </div>

                  {/* MEMBER IMAGE */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="ts-member-photo"
                  />

                </div>

                {/* CARD INFORMATION */}
                <div className="ts-member-card-info">

                  <h2>
                    {member.name}
                  </h2>

                  <p>
                    {member.role}
                  </p>

                  <button
                    className="ts-member-arrow"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleMemberClick(member);
                    }}
                    aria-label={`View ${member.name}`}
                  >
                    →
                  </button>

                </div>

              </article>
            ))}

          </div>
        )}

        {/* =========================
            MEMBER DETAIL
        ========================= */}
        {selectedMember && (
          <div className="ts-member-detail-view">

            <aside className="ts-member-details">

              {/* =====================
                  MEMBER IMAGE
              ===================== */}
              <div className="ts-details-image">

                {/* BLUE FLAME BEHIND PERSON */}
                <div className="ts-details-flame">

                  <div className="ts-details-flame-core"></div>

                </div>

                {/* MEMBER PHOTO */}
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                />

                {/* BACK ARROW */}
                <button
                  className="ts-back-members"
                  onClick={backToMembers}
                  aria-label="Back to Members"
                  title="Back to Members"
                >
                  ←
                </button>

              </div>

              {/* =====================
                  MEMBER INFORMATION
              ===================== */}
              <div className="ts-details-content">

                <span className="ts-details-role">
                  {selectedMember.role}
                </span>

                <h2>
                  {selectedMember.name}
                </h2>

                <p>
                  {selectedMember.description}
                </p>

                {/* SKILLS */}
                <div className="ts-details-skills">

                  <h3>
                    SKILLS
                  </h3>

                  <div className="ts-skills-list">

                    {selectedMember.skills.map((skill) => (
                      <span
                        key={skill}
                        className="ts-skill"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

                {/* FOOTER */}
                <div className="ts-details-footer">

                  <span></span>

                  <strong>
                    T R E E S T A C K
                  </strong>

                  <span></span>

                </div>

              </div>

            </aside>

          </div>
        )}

        {/* =========================
            TEAMWORK
        ========================= */}
        {!selectedMember && (
          <div className="ts-teamwork">

            <span className="ts-members-label">
              OUR TEAMWORK
            </span>

            <h2>
              Three Members. <span>One Goal</span>
            </h2>

            <p>
              We combine our different skills, ideas, and
              experiences to complete academic projects and
              learn more about Information Technology together.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default Members;