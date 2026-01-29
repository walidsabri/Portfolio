import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    closeMenu();
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("/projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    closeMenu();
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("/about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("/contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="nav">
      <Link to="/" className="nav-logo">
        <svg className="logo-icon" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.1" fill="rgb(237, 237, 237)" />
          <g stroke="rgb(237, 237, 237)" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.5" />
            <ellipse rx="11" ry="4.5" transform="rotate(60)" />
            <ellipse rx="11" ry="4.5" transform="rotate(120)" />
          </g>
        </svg>
        <span className="logo-slash">/</span>
        <span className="logo-name">WALID SABRI</span>
        <span className="logo-divider">|</span>
        <span className="logo-title">Frontend Developer</span>
      </Link>

      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li
          className={
            isOpen
              ? "animate__animated animate__slideInLeft animate__faster"
              : ""
          }
          style={{ animationDelay: "0s" }}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li
          className={
            isOpen
              ? "animate__animated animate__slideInLeft animate__faster"
              : ""
          }
          style={{ animationDelay: "0.4s" }}>
          <a href="#projects" onClick={handleProjectsClick}>
            Projects
          </a>
        </li>
        <li
          className={
            isOpen
              ? "animate__animated animate__slideInLeft animate__faster"
              : ""
          }
          style={{ animationDelay: "0.8s" }}>
          <a href="#about" onClick={handleAboutClick}>
            About-me
          </a>
        </li>
        <li
          className={
            isOpen
              ? "animate__animated animate__slideInLeft animate__faster"
              : ""
          }
          style={{ animationDelay: "1.2s" }}>
          <a href="#contact" onClick={handleContactClick}>
            Contact
          </a>
        </li>
        <li
          className={
            isOpen
              ? "animate__animated animate__slideInLeft animate__faster"
              : ""
          }
          style={{ animationDelay: "1.6s" }}>
          EN
        </li>
      </ul>
    </div>
  );
}
