import Project from "../components/Component1.jsx";
import ClickButton from "../components/Button.jsx";
import ProjectImgproject1 from "../assets/designthinkingproject.png";
import ProjectImgproject2 from "../assets/svgproject.png";
import ProjectImgproject3 from "../assets/GameShop.png";
import ProjectPopup from "../components/ProjectPopup.jsx";
import { useState } from "react";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: 1,
      name: "Productly",
      image: ProjectImgproject1,
      repolink: "https://github.com/fatimazohrafadirik/assignment07",
      tech: "HTML, CSS, Grid",
      description: "Responsive Web Design and Adaptive Graphics.",
      learning: "I learned how to create responsive layouts using CSS Grid.",
      challenges: "Creating a responsive design for different screen sizes.",
    },
    {
      id: 2,
      name: "NEON ARCADE NIGHT",
      image: ProjectImgproject2,
      repolink: "https://github.com/fatimazohrafadirik/Assignmentlesson9",
      tech: "HTML, CSS, SVG, CSS Animation",
      description: "Responsive Web Design with SVG and animations.",
      learning: "I learned how to work with SVG graphics and CSS animations.",
      challenges: "Creating animations and integrating SVG graphics.",
    },
    {
      id: 3,
      name: "Game Shop",
      image: ProjectImgproject3,
      repolink: "https://github.com/kiwijander/Gameshop",
      tech: "HTML, CSS, SVG, Animation",
      description: "Responsive online game shop.",
      learning: "I learned how to collaborate and build a responsive website.",
      challenges:
        "Working together and combining different parts of the project.",
      team: "Fatima, Denis and Orion",
    },
  ];

  return (
    <>
      <ClickButton
        onClick={() => {
          setShowProjects(!showProjects);
        }}
      >
        {showProjects ? "Hide My Projects" : "Show My Projects"}
      </ClickButton>

      <div className="projects-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* popup appears array of projects
      {showProjects && (
        <div>
          <Project
            image={ProjectImgproject1}
            name="Productly"
            repolink="https://github.com/fatimazohrafadirik/assignment07"
            tech="HTML , CSS , GRID ,"
            description="Responsive Web Design and Adaptive Graphics."
          ></Project>
          <Project
            image={ProjectImgproject2}
            name="NEON ARCADE NIGHT"
            repolink="https://github.com/fatimazohrafadirik/Assignmentlesson9"
            tech="HTML , CSS , SVG interne , SVG externe, CSS animation"
            description="Responsive Web Design with SVG and animations."
          ></Project>
          <Project
            image={ProjectImgproject3}
            name="Game shop"
            repolink="https://github.com/kiwijander/Gameshop"
            tech="HTML , CSS , SVG , Animation"
            description="Responsive Web Design "
            Team="Fatima , Denis and Orion"
          ></Project>
          </div> 
          )}*/}
    </>
  );
}

export default Portfolio;
