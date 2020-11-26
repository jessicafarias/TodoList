const toDo = () => {

  const title = document.getElementById('new_task_title').value;
  const description = document.getElementById('new_task_description').value;
  const dueDate = document.getElementById('new_task_due_date').value;
  const priority = document.getElementById('new_task_priority').value;

  function ToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  let todo = new ToDo(title, description, dueDate, priority);

  const droplist = document.getElementById('dropdown').value;
  const arr = JSON.parse(localStorage.getItem(droplist));

  arr.push(todo);
  localStorage.setItem(droplist, JSON.stringify(arr));

  return todo;
}

export default toDo;