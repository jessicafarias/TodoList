import deleteTask from './delete_task';

const tasksListing = (tasks) => {
  const task_container = document.getElementById('tasks_container');
  task_container.innerHTML ='';

  tasks.forEach(element => {
    const list_item = document.createElement('li');
    list_item.classList.add('list-group-item');

    const dflex = document.createElement('div');
    dflex.classList.add('d-flex', 'justify-content-between')


    const info = document.createElement('span')
    info.innerHTML= "Tast title: " + element.title + " Date due " + element.dueDate;

    const delButton = document.createElement('div');
    delButton.classList.add('btn', 'btn-danger');
    delButton.innerHTML = 'Delete';

    delButton.addEventListener('click', () => {
      deleteTask(tasks, tasks.indexOf(element));
    })

    dflex.appendChild(info);
    dflex.appendChild(delButton);

    list_item.appendChild(dflex);
    task_container.appendChild(list_item);
  });
}

export default tasksListing;