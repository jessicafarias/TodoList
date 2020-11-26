const tasksIndex = () => {
  const arr = []
  for(let i = 0; i < localStorage.length; i++){
    let key = JSON.parse(localStorage.getItem(localStorage.key(i)));
    for(let j = 0; j < key.length; j++){
      arr.push(key[j]);
    }
  }

  const task_container = document.getElementById('tasks_container');
  task_container.innerHTML ='';

  arr.forEach(element => {
    const list_item = document.createElement('li');
    list_item.classList.add('list-group-item');
    list_item.innerHTML= "Tast title: " + element.title + " Date due " + element.dueDate;
    task_container.appendChild(list_item);
  });

  const addButton = document.getElementById('create_task')


  return(true);
}

export default tasksIndex;