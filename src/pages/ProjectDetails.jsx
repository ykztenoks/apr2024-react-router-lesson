import { useParams, Link, Navigate } from "react-router-dom";
// import { useState } from "react";
function ProjectDetails({ projects }) {
  const { projectId } = useParams();
  // const [project, setProject] = useState(null)

  const oneProject = projects.find((project) => project._id === projectId);
  console.log(oneProject);

  return (
    <div>
      <h1>Project Details</h1>
      {!oneProject && <Navigate to="/projects" />}
      {oneProject && (
        <>
          <h2>{oneProject.name}</h2>
          <h3>{oneProject.technologies}</h3>
          <p>{oneProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  );
}

export default ProjectDetails;
