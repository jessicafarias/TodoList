const retrieveTasks = () => {

  let tasks = JSON.parse(localStorage.getItem("work_stuff") || "[]");
  const task_container = document.getElementById('tasks_container');
  tasks.forEach(element => {
    const list_item = document.createElement('li');
    list_item.classList.add('list-group-item');
    list_item.innerHTML= "Tast title: "+element.title + " Date due " +element.dueDate;
    task_container.appendChild(list_item);
  });

}

export default retrieveTasks();