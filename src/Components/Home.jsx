import './css/Home.css'
import { useState } from "react";
// Images
import github_logo from "../assets/github-mark-white.svg";
import mentor_logo from "../assets/front-mentor.webp";
import codewars_logo from "../assets/codewars_logo.png";
import codepen_logo from "../assets/codepen.png";

const Home = () => {
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
    <>
      <div className="home text-light d-flex justify-content-around mt-5 align-items-center flex-column flex-md-row ">
        <h2 className="w-50">Hello everyone, <br /> 
        <p>I am <span className="stroke">Mohammed Hossam</span></p>
         <span style={{color: '#F6635C', textShadow: '0 0 5px #F6635C'}}>Frontend Developer</span></h2>

        <div className="languages mt-5">
          <h1>this section
            <br />
             Coming soon ...</h1>
        </div>
      </div>
        <div className="links">
          <a href="#" target='_blank'>
            <div className="mostaql">
              <span className='mostaql-icon'></span>
              <span>mostaql</span>
          </div>
          </a>
          <a href="#" target='_blank'>
            <div className="github">
              <span><img src={github_logo} /></span>
              <span>github</span>
          </div>
          </a>
          <a href="#" target='_blank'>
            <div className="codepen">
              <span><img className="rounded-5" src={codepen_logo} /></span>
              <span>codepen</span>
            </div>
          </a>
          <a href="#" target='_blank'>
            <div className="codewars">
              <span><img className="rounded-5" src={codewars_logo} /></span>
              <span>codewars</span>
            </div>
          </a>
          <a href="#" target='_blank'>
            <div className="mentor">
              <span><img className="rounded-5" src={mentor_logo} /></span>
              <span>mentor</span>
            </div>
          </a>
        </div>
    </>
  );
}

export default Home;