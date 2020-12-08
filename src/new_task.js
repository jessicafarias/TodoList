import ToDo from './todo';
import tasksIndex from './tasks_index';

const createTask = (someValue) => {
  try {
    const title = document.getElementById('new_task_title').value;
    const description = document.getElementById('new_task_description').value;
    const dueDate = document.getElementById('new_task_due_date').value;
    const priority = document.getElementById('new_task_priority').value;

    const todo = ToDo(title, description, dueDate, priority);

    const droplist = someValue;
    const arr = JSON.parse(localStorage.getItem(droplist));

    arr.push(todo);
    localStorage.setItem(droplist, JSON.stringify(arr));

    tasksIndex(droplist);
    return todo;
  } catch (error) {
    return error.message;
  }
};

export default createTask;