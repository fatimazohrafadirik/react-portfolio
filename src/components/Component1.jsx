import "./Component1.css";

function Project(props) {
  return (
    <>
      <section className="box">
        <div className="project">
          <h1>Project name : {props.name} </h1>
          <img className="img" src={props.image} alt="project image" />

          <h3>
            Github repo :
            <a href={props.repolink} target="_blank" rel="Project Link">
              View on GitHub
            </a>
          </h3>
          <h3>Tech used : {props.tech} </h3>
          <h3>Description : {props.description}</h3>
          <h3>The team worked on this project : {props.Team} </h3>
        </div>
      </section>
    </>
  );
}

export default Project;
