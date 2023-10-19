import light_logo from "../assets/my-logo2.png";
import { useRef, useContext, useState } from "react";
import './css/Navbar.css'

export default function Navbar() {
  
  return (
    <>
      <nav className="navbar bg-warning navbar-dark navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={light_logo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
