import Project from "../components/Component1.jsx";
import ClickButton from "../components/Button.jsx";
import ProjectImgproject1 from "../assets/designthinkingproject.png";
import ProjectImgproject2 from "../assets/svgproject.png";
import ProjectImgproject3 from "../assets/GameShop.png";
import { useState } from "react";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <ClickButton
        onClick={() => {
          setShowProjects(!showProjects);
        }}
      >
        {showProjects ? "Hide My Projects" : "Show My Projects"}
      </ClickButton>

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
      )}
    </>
  );
}

export default Portfolio;
