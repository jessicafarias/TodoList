import tasksListing from './tasks_listing';

const tasksIndex = (project) => {
  project = project || 0;

  const task_container = document.getElementById('tasks_container');
  task_container.innerHTML ='';

  if(project === 0){
    for(let i = 0; i < localStorage.length; i++){
      tasksListing(localStorage.key(i), task_container, false);
    }
  }else{
    tasksListing(project, task_container, true);
  }
  return(true);
}

export default tasksIndex;