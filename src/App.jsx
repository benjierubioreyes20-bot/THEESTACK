import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Members from "./pages/Members";
import Contact from "./pages/Contact";

function App() {
  const [activePage, setActivePage] = useState("Home");

  // Always start every main page at the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [activePage]);

  const changePage = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case "About":
        return <About />;

      case "Projects":
        return <Projects />;

      case "Members":
        return <Members />;

      case "Contact":
        return <Contact />;

      case "Home":
      default:
        return <Home setActivePage={changePage} />;
    }
  };

  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={changePage}
      />

      <main>{renderPage()}</main>

      <Footer />
    </>
  );
}

export default App;