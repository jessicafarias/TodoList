import retrieveProjects from './retrieve_projects';

const project = () => {
  const project = [];

  const projectName = document.getElementById('new_project_name').value;

  localStorage.setItem(projectName, JSON.stringify(project));

  retrieveProjects();

  return true;
};

export default project;