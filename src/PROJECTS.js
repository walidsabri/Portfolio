import winnerArt from "./assets/winner-art.png";
import reedz from "./assets/reedz.png";
import waLogo from "./assets/WinArtLOGO.png";
import redzLogo from "./assets/reedz_logo.svg";

// Base project structure with i18n keys
export const projects = [
  {
    id: 1,
    titleKey: "projectsList.project1.title",
    typeKey: "projectsList.project1.type",
    descKey: "projectsList.project1.desc",
    img: winnerArt,
    tech: ["React", "JavaScript", "CSS", "PHP"],
    logo: waLogo,
    detailsKey: "projectsList.project1.details",
    processKey: "projectsList.project1.process",
  },
  {
    id: 2,
    titleKey: "projectsList.project2.title",
    typeKey: "projectsList.project2.type",
    descKey: "projectsList.project2.desc",
    img: reedz,
    tech: ["React", "JavaScript", "CSS", "Firebase"],
    logo: redzLogo,
    detailsKey: "projectsList.project2.details",
    processKey: "projectsList.project2.process",
  },
];
