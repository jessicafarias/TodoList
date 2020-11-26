import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import retrieveTasks from './retrieve_tasks';
import retrieveProjects from './retrieve_projects';
import project from './project';

const index = () =>{

  const new_project = document.getElementById('create_project');
  new_project.addEventListener("click", project);
  retrieveProjects();

}

index();