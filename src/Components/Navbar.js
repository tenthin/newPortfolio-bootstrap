import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="navigation ">
      <div className="navbar-logo">
        <Link to="/">
          <Logo />
        </Link>
        <div></div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid flex-column align-items-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
              <Link to="/aboutme" id="link">
                <li className="nav-item">
                  {/* <a  href="/bio"> */}
                  About me
                  {/* </a> */}
                </li>
              </Link>
              <Link to="/project" id="link">
                <li className="nav-item">Projects</li>
              </Link>
              <Link to="/resume" id="link">
                <li className="nav-item">Resume</li>
              </Link>
              <Link to="/contact" id="link">
                <li className="nav-item">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
