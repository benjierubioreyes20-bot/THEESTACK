import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
function Header({ activePage, setActivePage }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navigation = [
    "Home",
    "About",
    "Projects",
    "Members",
    "Contact",
  ];

  const handleNavigation = (page) => {
    setActivePage(page);
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="site-header">
      <div className="container nav-container">

       <button
className="logo"
onClick={() => handleNavigation("Home")}
aria-label="THEESTACK Home"

>

<img
 src={logo}
 alt="THEESTACK Logo"
/> </button>


        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {navigation.map((page) => (
            <button
              key={page}
              className={`nav-link ${
                activePage === page ? "active" : ""
              }`}
              onClick={() => handleNavigation(page)}
            >
              {page}
            </button>
          ))}
        </nav>

        <div className="nav-actions">

          <button
            className="dark-mode-btn"
            id="darkModeBtn"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;

