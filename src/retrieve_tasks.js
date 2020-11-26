
const retrieveTasks = (key) => {

  let tasks = JSON.parse(localStorage.getItem(key) || "[]");
  const task_container = document.getElementById('tasks_container');
  task_container.innerHTML ='';

  tasks.forEach(element => {
    const list_item = document.createElement('li');
    list_item.classList.add('list-group-item');
    list_item.innerHTML= "Tast title: "+element.title + " Date due " +element.dueDate;
    task_container.appendChild(list_item);
  });

  return true

}

export default retrieveTasks;