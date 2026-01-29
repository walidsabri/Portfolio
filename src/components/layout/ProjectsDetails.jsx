import "./ProjectsDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../../PROJECTS.JS";
import back from "../../assets/back.png";

import ContactMe from "./ContactMe";

export default function ProjectsDetails() {
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
          Back to home
        </Link>
        <h3 className="project-d-title">
          <img src={project.logo} alt="" />
          {project.title}
        </h3>
        <p className="project-details-txt">{project.details}</p>
        <p className="process">{project.process}</p>
        <div className="tech-used">
          <p>Technologies</p>
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
