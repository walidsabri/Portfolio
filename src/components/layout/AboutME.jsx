import "./about.css";
import cssIcon from "../../assets/css.png";
import gitIcon from "../../assets/git.png";
import htmlIcon from "../../assets/html.png";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import reduxIcon from "../../assets/redux.png";
import rqIcon from "../../assets/rq.png";
import tcssIcon from "../../assets/tcss.png";
import tsIcon from "../../assets/ts.png";
import myPic from "../../assets/pic.png";

export default function AboutMe() {
  return (
    <section className="about-me-container" id="/about">
      <div className="titleContainer">
        <p className="about-me-title">Who I'm?</p>
      </div>
      <div className="about-content">
        <img className="pic" src={myPic} alt="" />
        <ul className="about-me-informations">
          <li>
            I'm <span>Walid Sabri</span>, a computer science graduate and junior
            frontend developer focused on building scalable and intuitive web
            experiences with <span>React.js</span>. I care about clean
            architecture, performance, and turning ideas into reliable
            interfaces that feel good to use.
          </li>
          <li>
            Beyond writing code, I enjoy experimenting with new concepts,
            refining side projects, and constantly pushing my skills through
            practical, real-world challenges.
          </li>
        </ul>
      </div>
      <div className="techonolgies">
        <h3>Technologies</h3>
        <p className="tech-subtitle">
          Tools and technologies I use to build modern, scalable frontend
          applications.
        </p>
        <ul>
          <li>
            <img src={reactIcon} alt="" />
            <p>React.js</p>
          </li>
          <li>
            <img src={jsIcon} alt="" />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={tsIcon} alt="" />
            <p>TypeScript</p>
          </li>
          <li>
            <img src={tcssIcon} alt="" />
            <p>Taillwind CSS</p>
          </li>
          <li>
            <img src={reduxIcon} alt="" />
            <p>REDUX</p>
          </li>
          <li>
            <img src={rqIcon} alt="" />
            <p>React Query</p>
          </li>
          <li>
            <img src={htmlIcon} alt="" />
            <p>HTML5</p>
          </li>
          <li>
            <img src={cssIcon} alt="" />
            <p>CSS3</p>
          </li>
          <li>
            <img src={gitIcon} alt="" />
            <p>Git</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
