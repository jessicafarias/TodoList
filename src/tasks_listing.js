import buttonsContainer from './buttons_container';

const tasksListing = (tasks, task_container, verify) => {
  let key = JSON.parse(localStorage.getItem(tasks));

  for(let j = 0; j < key.length; j++){
    const list_item = document.createElement('li');
    list_item.classList.add('list-group-item');
    const dflex = document.createElement('div');
    dflex.classList.add('d-flex', 'justify-content-between')
    const info = document.createElement('span')
    info.innerHTML= "Tast title: " + key[j].title + " Date due " + key[j].dueDate;


    dflex.appendChild(info);
    dflex.appendChild(buttonsContainer(tasks, key, verify, j));

    list_item.appendChild(dflex);
    task_container.appendChild(list_item);
  }

  return true

}

export default tasksListing;