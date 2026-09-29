import logo from "../assets/logo.jpg";
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
  <img
    src={logo}
    alt="TREESTACK Logo"
  />
</div>

          <p>
            An Information Technology student organization
            focused on teamwork, programming, technology,
            and collaborative projects.
          </p>
        </div>

        <div className="footer-bottom">
          <p>
        
     © {new Date().getFullYear()} TREESTACK.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
