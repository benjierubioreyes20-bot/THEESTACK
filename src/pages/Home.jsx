import logo from "../assets/logo.jpg";
function Home({ setActivePage }) {

return ( <section className="home-section"> <div className="container home-container">


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
  <div className="avatar-circle">
    <img
      src={logo}
      alt="TREESTACK Logo"
      className="home-logo-image"
    />
  </div>
</div>


  </div>
</section>


);
}

export default Home;