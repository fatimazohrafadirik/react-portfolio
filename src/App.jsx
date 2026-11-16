import Project from "./components/Component1.jsx";
import ProjectImgproject1 from "./assets/designthinkingproject.png";
import ProjectImgproject2 from "./assets/svgproject.png";
import ProjectImgproject3 from "./assets/GameShop.png";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
