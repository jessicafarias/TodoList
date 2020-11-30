/* eslint import/no-cycle:"off", curly:"off" */
import toDo from './todo';
import tasksIndex from './tasks_index';

const updateTask = (key, index) => {
  const tasks = JSON.parse(localStorage.getItem(key));
  const title = document.getElementById('modal_title').value;
  const description = document.getElementById('modal_description').value;
  const dueDate = document.getElementById('modal_dueDate').value;
  const priority = document.getElementById('modal_priority').value;

  const todo = toDo(title, description, dueDate, priority);
  tasks.splice(index, 1, todo);

  localStorage.setItem(key, JSON.stringify(tasks));
  tasksIndex(key);
};

export default updateTask;