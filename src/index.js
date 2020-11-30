/* eslint import/no-cycle:"off", curly:"off" */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import retrieveProjects from './retrieve_projects';
import project from './project';
import tasksIndex from './tasks_index';
import createTask from './new_task';

const index = () => {
  const newProject = document.getElementById('create_project');
  newProject.addEventListener('click', project);
  retrieveProjects();
  tasksIndex();

  const newTask = document.getElementById('create_task');
  newTask.addEventListener('click', () => {
    createTask();
  });
};

index();