import React, { useState, useEffect } from "react";
import facebook from "../assets/images/icons/facebook.png";
import github from "../assets/images/icons/github.png";
import mail from "../assets/images/icons/mail.png";
import kaggle from "../assets/images/icons/kaggle.png";
import linkedin from "../assets/images/icons/linkedin.png";

const Sidenav = ({ show, onNavClick }) => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const options = {
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (page) => {
    setActivePage(page);
    onNavClick(page);
  };

  return (
    <nav
      className={`container-fluid d-flex flex-column justify-content-between align-items-center h-100 ${
        !show ? "hidden" : ""
      }`}
    >
      <div className="d-flex flex-column align-items-center">
        <h1 className="mb-5 fw-bold">Deepu</h1>
        <ul className="d-flex flex-column align-items-center">
          <li>
            <a onClick={() => handleNavClick('home')} href="#home" className={activePage === 'home' ? 'active' : ''}>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('experience')} href="#experience" className={activePage === 'experience' ? 'active' : ''}>
              Experience
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('research')} href="#research" className={activePage === 'research' ? 'active' : ''}>
              Research
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('skill')} href="#skill" className={activePage === 'skill' ? 'active' : ''}>
              Skill
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('education')} href="#education" className={activePage === 'education' ? 'active' : ''}>
              Education
            </a>
          </li>
          <li>
            <a onClick={() => handleNavClick('contact')} href="#contact" className={activePage === 'contact' ? 'active' : ''}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <a href="mailto:mdsdeepu3@gmail.com" className="mx-2"><img src={mail} alt="" className="img-fluid" style={{width: "24px"}} /></a>
        <a href="#" className="mx-2"><img src={facebook} alt="" className="img-fluid" style={{width: "24px"}} /></a>
        <a href="https://github.com/deepu1067" className="mx-2"><img src={github} alt="" className="img-fluid" style={{width: "24px"}} /></a>
        <a href="#" className="mx-2"><img src={linkedin} alt="" className="img-fluid" style={{width: "24px"}} /></a>
        <a href="#" className="mx-2"><img src={kaggle} alt="" className="img-fluid" style={{width: "24px"}} /></a>
      </div>
    </nav>
  );
};

export default Sidenav;
