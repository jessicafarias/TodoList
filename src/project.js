import retrieveProjects from './retrieve_projects.js';
import toDo from './todo.js';

const project = () => {

  const project = [];

  const project_name = document.getElementById('new_project_name').value;

  localStorage.setItem(project_name, JSON.stringify(project));

  retrieveProjects();

  return true;

}

export default project;