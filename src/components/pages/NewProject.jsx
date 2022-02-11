import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate('/projects', {
          state: { message: "Project created successfuly!" },
        });
      })
      .catch((err) => console.log("Error:", err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project first then add the services</p>
      <ProjectForm handleSubmit={createPost} btnText="Creat Project" />
    </div>
  );
}

export default NewProject;
