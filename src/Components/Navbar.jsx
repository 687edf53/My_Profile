import { Link, NavLink } from "react-router-dom";
import light_logo from "../assets/my-logo2.png";
import { useState, useRef } from "react";

export default function Navbar() {
  const [translate] = useState({
    ar: {
      home: "الصفحة الرئيسية",
      lang: "الفة",
      about: "حول",
      name: "687edf53 | محمد حسام",
    },
    en: {
      home: "Home",
      lang: "Lang",
      about: "About",
      name: "Mohammed Hossam | 687edf53",
    },
  });

  const [langValid, setLangValid] = useState(true);

  const activeEn = useRef(null);
  const activeAr = useRef(null);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={light_logo} alt="logo" />
            <span className="ps-2 fs-6 d-none d-md-inline">
              {langValid ? translate.en.name : translate.ar.name}
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* collapse */}
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {langValid ? translate.en.home : translate.ar.home}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {langValid ? translate.en.lang : translate.ar.lang}
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link
                      ref={activeAr}
                      className="dropdown-item"
                      onClick={() => {
                        setLangValid(false);
                        activeAr.current.className = `dropdown-item active`;
                        activeEn.current.className = `dropdown-item`;
                      }}
                    >
                      Ar
                    </Link>
                  </li>
                  <li>
                    <Link
                      ref={activeEn}
                      className="dropdown-item active"
                      onClick={() => {
                        setLangValid(true);
                        activeAr.current.className = `dropdown-item`;
                        activeEn.current.className = `dropdown-item active`;
                      }}
                    >
                      En
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {langValid ? translate.en.about : translate.ar.about}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
