import "./projectsComp.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import more from "../../assets/more.png";
import code from "../../assets/code.png";
import { projects } from "../../PROJECTS.js";

// Project data array

export default function ProjectsComp() {
  const { t } = useTranslation();
  return (
    <section className="projects-container" id="/projects">
      <h3 className="p-title">{t("projects.title")}</h3>

      <div className="projects-cards">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img
              src={project.img}
              alt={`${t(project.titleKey)} project preview`}
            />

            <div className="card-info">
              <h4>{t(project.titleKey)}</h4>
              <p className="project-type">{t(project.typeKey)}</p>
              <p className="project-desc">{t(project.descKey)}</p>

              <div className="card-footer">
                <ul className="project-tech">
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>

                <div className="card-actions">
                  {/* Pass project data via state */}
                  <Link
                    to={`/project/${project.id}`}
                    state={{ project }}
                    className="details-btn">
                    <img src={more} alt="Details" />
                    <span className="btn-text">Details</span>
                  </Link>

                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="source-code">
                    <img src={code} alt="Source code" />
                    <span className="btn-text">Source</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
