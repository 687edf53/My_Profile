import "./css/creative.css";
import { useState } from "react";
// Images
import github_logo from "../assets/github-mark-white.svg";
import mentor_logo from "../assets/front-mentor.webp";
import codewars_logo from "../assets/codewars_logo.png";
import codepen_logo from "../assets/codepen.png";

export default function Home() {
  const [translate] = useState({
    ar: {
      skills: "المهارات",
      links: "الروابط",
      projects: "المشاريع",
    },
    en: {
      skills: "Skills",
      links: "Links",
      projects: "Projects",
    },
  });

  return (
    <div className="text-center w-100 h-100">
      <div className="creative d-flex justify-content-center row px-5">
        {/* skills */}
        <div className="skills text-center text-light p-5 rounded-3 shadow-sm col-sm-3 col-md-5 col-lg-4">
          <h3 className="mb-4 d-flex address ">Skills</h3>

          <div
            className="progress-section d-flex flex-column justify-content-between "
            style={{ height: "350px" }}
          >
            <h5>HTML</h5>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "90%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h5 className="mt-3">CSS</h5>
            <div className="progress">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h5 className="mt-3">JAVASCRIPT</h5>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h5 className="mt-3">React</h5>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <h5 className="mt-3">Bootstrap</h5>
            <div className="progress">
              <div
                className="progress-bar bg-bootstrap"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "90%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="github text-light p-4 rounded-3 shadow-sm position-relative col-sm-3 col-md-5 d-flex flex-column gap-5 justify-content-center col-lg-4">
          <h3 className="position-absolute d-flex links-address">
            Links
          </h3>
          {/* row align-items-center justify-content-center */}

          <div className="row d-flex justify-content-center align-items-center">
            <div className="websites col-5">
              <a href="https://github.com/687edf53" target="_blank">
                <img src={github_logo} alt="github-logo" className="mb-3" />
                <h5>Github</h5>
              </a>
            </div>
            <div className="websites col-5">
              <a
                href="https://frontendmentor.io/profile/687edf53"
                target="_blank"
              >
                <img src={mentor_logo} alt="mentor-logo" className="mb-3" />
                <h5>Mentor</h5>
              </a>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="websites col-5">
              <a href="https://codewars.com/users/687edf53" target="_blank">
                <img
                  src={codewars_logo}
                  alt="codewars-logo"
                  className="mb-3 rounded-5"
                />
                <h5>Codewars</h5>
              </a>
            </div>
            <div className="websites col-5">
              <a href="https://codepen.io/687edf53/" target="_blank">
                <img
                  src={codepen_logo}
                  alt="codepen-logo"
                  className="mb-3 rounded-5"
                />
                <h5>Codepen</h5>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="test text-center text-light p-5 rounded-3 shadow-sm">
          <h3 className="mb-4 d-flex address ">Projects</h3>
        </div> */}
      </div>
    </div>
  );
}
