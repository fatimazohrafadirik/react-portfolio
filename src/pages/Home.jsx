import MyImage from "../assets/Fatima_Zohra_Fadirik_CV_photo.png";
import "./Home.css";
function Home() {
  return (
    <section>
      <h3>
        Hi! I'm Fatimazohra, an aspiring Frontend Developer with a background in
        Quality Assurance (QA).
        <br />
        I'm passionate about technology, problem-solving, and creating
        beautiful, user-friendly web experiences. Currently, I'm developing my
        skills in HTML, CSS, JavaScript, and React, turning creative ideas into
        interactive digital experiences.
        <br />
        I'm always curious, eager to learn, and excited to build something
        meaningful through code.
      </h3>
      <img src={MyImage} alt="My image" />
    </section>
  );
}

export default Home;
