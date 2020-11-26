import tasksListing from './tasks_listing';

const retrieveTasks = (key) => {
  let tasks = JSON.parse(localStorage.getItem(key) || "[]");

  tasksListing(tasks);

  const addButton = document.getElementById('create_task')

  return true

}

export default retrieveTasks;