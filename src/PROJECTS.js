import winnerArt from "./assets/winner-art.png";
import reedz from "./assets/reedz.png";
import waLogo from "./assets/WinArtLOGO.png";
import redzLogo from "./assets/reedz_logo.svg";
export const projects = [
  {
    id: 1,
    title: "Winner Art",
    type: "Art school management platform",
    desc: "A real-world platform developed for an art school to showcase activities, manage content, and present student work.",
    img: winnerArt,
    tech: ["React", "JavaScript", "CSS", "PHP"],
    logo: waLogo,
    details:
      "Winner Art is a comprehensive platform designed for art schools. It allows schools to manage their courses, showcase their offerings, and provide a seamless experience for students to subscribe to courses and purchase art instruments. The platform integrates features for content management, student work presentation, and activity tracking, making it an essential tool for art education.",
    process:
      "The development process involved close collaboration with the art school to gather requirements and design a platform tailored to their needs. The frontend was built with React, leveraging reusable components and state management for a smooth user experience. The backend was implemented in PHP to handle user authentication, data processing, and communication with the MySQL database. The platform also includes features like secure payment gateways and e-commerce functionalities for purchasing art supplies.",
  },
  {
    id: 2,
    title: "Reedz",
    type: "Reddit-style discussion platform (Bachelor’s final project)",
    desc: "A Reddit-inspired platform built with React, focused on scalable frontend architecture, reusable components, and efficient state management.",
    img: reedz,
    tech: ["React", "JavaScript", "CSS", "Firebase"],
    logo: redzLogo,
    details:
      "Reedz is a discussion platform inspired by Reddit, designed to facilitate community-driven discussions. It features a scalable frontend architecture, reusable components, and efficient state management. Users can create posts, comment, and engage in discussions, making it a dynamic and interactive platform for sharing ideas.",
    process:
      "The development process focused on creating a scalable and modular frontend architecture using React. The Context API was implemented to manage the application's state effectively, ensuring a smooth user experience. Firebase was used to handle real-time data synchronization and user authentication, making the platform highly interactive and responsive. The project also emphasized creating reusable components to ensure maintainability and scalability.",
  },
];
