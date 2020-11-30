/* eslint import/no-cycle:"off", curly:"off" */
import tasksListing from './tasks_listing';

const tasksIndex = (project) => {
  project = project || 0;

  const taskContainer = document.getElementById('tasks_container');
  taskContainer.innerHTML = '';

  if (project === 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      tasksListing(localStorage.key(i), taskContainer, false);
      document.getElementById('category_name').innerHTML = "All "
    }
  } else {
    tasksListing(project, taskContainer, true);
    document.getElementById('category_name').innerHTML = project + ' category '
  }
  return (true);
};

export default tasksIndex;