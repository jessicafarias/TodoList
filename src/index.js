import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import retrieveProjects from './retrieve_projects';
import project from './project.js';
import toDo from './todo.js';
import tasksIndex from './tasks_index';

const index = () =>{

  const new_project = document.getElementById('create_project');
  new_project.addEventListener("click", project);
  retrieveProjects();

  const new_task  = document.getElementById('create_task');
  new_task.addEventListener("click", () => {
    toDo();
  });

}

index();