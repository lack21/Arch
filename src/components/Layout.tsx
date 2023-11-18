import { Link, Outlet } from "react-router-dom";
import darkLogoImage from "../assets/logo.svg";
import lightLogoImage from "../assets/logo - white.svg";
import whiteArrowIcon from "../assets/icons/icon-arrow.svg";
import hamburgerIcon from "../assets/icons/icon-hamburger.svg";
import closeIcon from "../assets/icons/icon-close.svg";
import { useState } from "react";

function Layout() {
  const [isLinks, setIsLinks] = useState(false);

  function ToggleLinks() {
    setIsLinks((isLinks) => !isLinks);
  }

  function RemoveLinks() {
    setIsLinks(false);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Arch" className="img-link" onClick={RemoveLinks}>
          <img src={darkLogoImage} alt="logo" />
        </Link>
        <div className={`links ${isLinks ? "active" : ""}`}>
          <Link to="portfolio" className="link" onClick={RemoveLinks}>
            Portfolio
          </Link>
          <Link to="about" className="link" onClick={RemoveLinks}>
            About Us
          </Link>
          <Link to="contact" className="link" onClick={RemoveLinks}>
            Contact
          </Link>
        </div>
        <img
          src={isLinks ? closeIcon : hamburgerIcon}
          className={`links-btn ${isLinks ? "active" : ""}`}
          alt="links-btn"
          onClick={ToggleLinks}
        />
      </nav>
      <Outlet />
      <footer className="footer">
        <Link to="/Arch" className="img-link">
          <img src={lightLogoImage} alt="logo" />
        </Link>
        <Link to="portfolio" className="link">
          Portfolio
        </Link>
        <Link to="about" className="link">
          About Us
        </Link>
        <Link to="contact" className="link">
          Contact
        </Link>
        <Link to="portfolio" className="btn">
          See Our Portfolio
          <img src={whiteArrowIcon} alt="arrow-icon" />
        </Link>
      </footer>
    </>
  );
}

export default Layout;
