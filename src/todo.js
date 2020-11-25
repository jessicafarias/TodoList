const toDo = () => {

  function ToDo() {
    this.title = 'Name';
    this.description = 'Description';
    this.dueDate = '10/30/2020';
    this.priority = 1;

    function getTitle(){
      return this.title
    }
  }

  let todo = new ToDo();

  return todo;
}

export default toDo();