import React, { useState } from "react";
import "./App.css";
import Sidenav from "./views/sidenav";
import MenuOpen from "./assets/images/icons/menu-open.png";
import MenuClose from "./assets/images/icons/menu-close.png";
import deepu from "./assets/images/main.jpg";
import Experience from "./views/Experience";
import Research from "./views/Research";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowSidebar(false);
  };

  return (
    <main className="d-flex">
      <Sidenav show={showSidebar} onNavClick={scrollToSection} />
      <button
        className="d-xl-none"
        style={{
          zIndex: 1000,
          position: "fixed",
          top: "20px",
          left: "20px",
        }}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <img
          src={showSidebar ? MenuClose : MenuOpen}
          alt="menu"
          className="img-fluid"
          width={30}
          height={30}
        />
      </button>

      <div className="content-wrapper" style={{ 
        height: '100vh', 
        overflowY: 'auto',
        scrollSnapType: 'y proximity',
        scrollBehavior: 'smooth',
        width: '100%',
        marginLeft: 'auto',
        paddingLeft: showSidebar ? '250px' : '0',
        transition: 'padding-left 0.3s ease',
      }}
      onScroll={() => setShowSidebar(false)}
      >
        <section 
          className="d-flex flex-column justify-content-center align-items-center container min-vh-100" 
          id="home"
          style={{ scrollSnapAlign: 'start' }}
        >
          <img
            src={deepu}
            alt="deepu"
            width={300}
            height={300}
            className="img-fluid mb-3 rounded-circle"
          />
          <p style={{ color: "#cad593" }}>Hi, I'm</p>
          <h1 className="text-center" style={{ color: "#243010" }}>Delwar Shahadat Deepu</h1>
          <p style={{ color: "#cad593", fontSize: "1.5rem" }}>
            I am both a developer and a researcher
          </p>
        </section>
        
        <section 
          id="experience" 
          className="min-vh-100" 
          style={{ scrollSnapAlign: 'start' }}
        >
          <Experience />
        </section>

        <section 
          id="research" 
          className="min-vh-100" 
          style={{ scrollSnapAlign: 'start' }}
        >
          <Research />
        </section>
      </div>
    </main>
  );
};

export default App;
