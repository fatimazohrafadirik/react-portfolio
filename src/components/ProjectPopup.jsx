import "./ProjectPopup.css";

function ProjectPopup({ project, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>{project.name}</h2>

        <img src={project.image} alt={project.name} className="popup-image" />

        <h3>Technologies used</h3>
        <p>{project.tech}</p>

        <h3>About the project</h3>
        <p>{project.description}</p>

        <h3>What I learned</h3>
        <p>{project.learning}</p>

        <h3>Challenges</h3>
        <p>{project.challenges}</p>

        {project.team && <p>Team: {project.team}</p>}

        <a href={project.repolink} target="_blank" rel="noopener noreferrer">
          View GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default ProjectPopup;
