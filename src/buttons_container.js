import tasksIndex from './tasks_index';
import updateTask from './update_task';

const buttonsContainer = (tasks, key, verify, j) => {

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
    const modalSubmit = document.getElementById('update_data');
    modalSubmit.removeEventListener('click', updateTask(), true);

    modalSubmit.addEventListener('click', () => {
      // add feature here;
      updateTask();
    })
  });

    btnContainer.appendChild(editButton);
    btnContainer.appendChild(delButton);

  return btnContainer;
}

export default buttonsContainer;