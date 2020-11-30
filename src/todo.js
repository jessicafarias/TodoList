const toDo = (title, description, dueDate, priority) => {

  function ToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  const task = new ToDo(title, description, dueDate, priority);
  return task;
}

export default toDo;