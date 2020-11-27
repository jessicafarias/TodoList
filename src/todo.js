import retrieveTasks from './retrieve_tasks'

const toDo = () => {
    
  const title = document.getElementById('new_task_title').value;
  const description = document.getElementById('new_task_description').value;
  const dueDate = document.getElementById('new_task_due_date').value;
  const priority = document.getElementById('new_task_priority').value;

  function ToDo(title, description, dueDate, priority, id) {
    this.id =id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  const droplist = document.getElementById('dropdown').value;

  let id =0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = JSON.parse(localStorage.getItem(localStorage.key(i)));
    key.forEach(element => {
      if(element.id >= id){
        id = element.id +1;
      }
    });
  }
  

  let todo = new ToDo(title, description, dueDate, priority, id);

  const arr = JSON.parse(localStorage.getItem(droplist));

  arr.push(todo);
  localStorage.setItem(droplist, JSON.stringify(arr));

  retrieveTasks(droplist);

  return todo;
}

export default toDo;