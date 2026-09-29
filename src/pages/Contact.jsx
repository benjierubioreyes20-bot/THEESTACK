
function Contact() {
  return (
    <section className="contact-section">
      <div className="container contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>
            Let's Connect
            <span> With Our Organization</span>
          </h1>

          <p>
            Have a question, project idea, or want to learn
            more about THREESTACK? You can reach out using
            the information below.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <span className="contact-card-label">
                  EMAIL
                </span>

                <h2>Email</h2>

                <p>
                  organization@example.com
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                📱
              </div>

              <div>
                <span className="contact-card-label">
                  CONTACT
                </span>

                <h2>Phone</h2>

                <p>
                  +63 XXX XXX XXXX
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <span className="contact-card-label">
                  LOCATION
                </span>

                <h2>Location</h2>

                <p>
                  Philippines
                </p>
              </div>
            </div>

          </div>

          {/* Message */}
          <div className="contact-message">

            <div className="contact-message-icon">
              💻
            </div>

            <span className="contact-message-label">
              THEESTACK
            </span>

            <h2>
              Building the Future Through Technology
            </h2>

            <p>
              Our organization believes that collaboration,
              continuous learning, and creativity can help
              students become better technology professionals.
              We learn by building, solving problems, and
              working together.
            </p>

            <div className="contact-decoration">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
