import "./ProjectsDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../../PROJECTS.js";
import back from "../../assets/back.png";

import ContactMe from "./ContactMe";

export default function ProjectsDetails() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p>Project not found!</p>;

  return (
    <>
      <section className="project-details-container">
        <Link to="/" className="back-btn">
          <img src={back} alt="" />
          {t("projectDetails.backBtn")}
        </Link>
        <h3 className="project-d-title">
          <img src={project.logo} alt="" />
          {t(project.titleKey)}
        </h3>
        <p className="project-details-txt">{t(project.detailsKey)}</p>
        <p className="process">{t(project.processKey)}</p>
        <div className="tech-used">
          <p>{t("projectDetails.technologiesTitle")}</p>
          <ul className="tech-list">
            {project.tech.map((ptech) => (
              <li key={ptech.id}>{ptech}</li>
            ))}
          </ul>
        </div>
      </section>
      <ContactMe />
    </>
  );
}
