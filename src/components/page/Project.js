import projectLink from "../../data/ProjectLink";
import './Project.css'

const Project = () => {
  return (
    <div className="container">
      <h1>My Project</h1>
      <ul className="project-container">
        {projectLink.map((data, index) => {
          return (
            <li className="project-text" key={index}>
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <span>{data.projectTitle}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Project;
