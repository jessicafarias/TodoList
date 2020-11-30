import ToDo from './todo';
import tasksIndex from './tasks_index'

const newTask = () => {

  const title = document.getElementById('new_task_title').value;
  const description = document.getElementById('new_task_description').value;
  const dueDate = document.getElementById('new_task_due_date').value;
  const priority = document.getElementById('new_task_priority').value;

  let todo = ToDo(title, description, dueDate, priority);

  const droplist = document.getElementById('dropdown').value;
  const arr = JSON.parse(localStorage.getItem(droplist));

  arr.push(todo);
  localStorage.setItem(droplist, JSON.stringify(arr));

  tasksIndex(droplist);

  return todo;
}

export default newTask;