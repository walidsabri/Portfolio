import "./about.css";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <section className="about-me-container" id="/about">
      <div className="titleContainer">
        <p className="about-me-title">{t("about.title")}</p>
      </div>
      <div className="about-content">
        <img className="pic" src={myPic} alt="" />
        <ul className="about-me-informations">
          <li>{t("about.description1")}</li>
          <li>{t("about.description2")}</li>
        </ul>
      </div>
      <div className="techonolgies">
        <h3>{t("about.technologiesTitle")}</h3>
        <p className="tech-subtitle">{t("about.technologiesSubtitle")}</p>
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
