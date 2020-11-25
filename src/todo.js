const toDo = () => {

  function ToDo() {
    this.title = 'Title';
    this.description = 'Description';
    this.dueDate = '10/30/2020';
    this.priority = 1;
  }

  let todo = new ToDo();

  return todo;
}

export default toDo();