import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    navigate("/");
    setMenuOpen(false); // close menu after navigation
  };

  const goToGallery = () => {
    navigate("/gallery");
    setMenuOpen(false); // close menu after navigation
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="https://i.pinimg.com/736x/4f/64/9d/4f649d4e28628af8013065f37e5655ee.jpg"
            alt="Witlens Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <h1>Witlens</h1>
            <h2>Moments</h2>
          </div>
        </div>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
        <nav className="menu">
          <ul>
            <li onClick={goToHome}>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li onClick={goToGallery}>
              <a href="#">Gallery</a>
            </li>

            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
