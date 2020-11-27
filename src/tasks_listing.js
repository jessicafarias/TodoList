import tasksIndex from './tasks_index';

const tasksListing = (tasks, task_container, verify) => {
  let key = JSON.parse(localStorage.getItem(tasks));

  for(let j = 0; j < key.length; j++){
    const list_item = document.createElement('li');
    list_item.classList.add('list-group-item');
    const dflex = document.createElement('div');
    dflex.classList.add('d-flex', 'justify-content-between')
    const info = document.createElement('span')
    info.innerHTML= "Tast title: " + key[j].title + " Date due " + key[j].dueDate;
    const btnContainer = document.createElement('div');

    const delButton = document.createElement('div');
    delButton.classList.add('btn', 'btn-danger');
    delButton.innerHTML = 'Delete';
    delButton.addEventListener('click', () => {
      (key.splice(j, 1));
      key.length == 0 ? [] : key ;
      localStorage.setItem(tasks, JSON.stringify(key));
      if(verify){
        tasksIndex(tasks);
      }else{
        tasksIndex();
      }
    });

    const editButton = document.createElement('div');
    editButton.classList.add('btn', 'btn-info', 'mr-2');
    editButton.innerHTML = 'Edit';
    editButton.dataset.target = '#myModal';
    editButton.dataset.toggle = 'modal';
    editButton.addEventListener('click', () =>{
      document.getElementById('header').innerHTML= key[j].title;
      document.getElementById('modal_title').value = key[j].title;
      document.getElementById('modal_description').value = key[j].description;
      document.getElementById('modal_priority').value = key[j].priority;
      document.getElementById('modal_dueDate').value = key[j].dueDate;
    });
    
    

    btnContainer.appendChild(editButton);
    btnContainer.appendChild(delButton);

    dflex.appendChild(info);
    dflex.appendChild(btnContainer);

    list_item.appendChild(dflex);
    task_container.appendChild(list_item);
  }

  return true

}

export default tasksListing;