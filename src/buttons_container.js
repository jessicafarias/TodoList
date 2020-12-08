/* eslint import/no-cycle:"off", curly:"off" */
import tasksIndex from './tasks_index';
import updateTask from './update_task';

const buttonsContainer = (tasks, key, verify, j) => {
  const btnContainer = document.createElement('div');

  const delButton = document.createElement('div');
  delButton.classList.add('btn', 'btn-danger');
  delButton.innerHTML = 'Delete';
  delButton.addEventListener('click', () => {
    (key.splice(j, 1));
    const k = key.length === 0 ? [] : key;
    localStorage.setItem(tasks, JSON.stringify(k));
    if (verify) {
      tasksIndex(tasks);
    } else {
      tasksIndex();
    }
  });

  const editButton = document.createElement('div');
  editButton.classList.add('btn', 'btn-info', 'mr-2');
  editButton.innerHTML = 'Edit';
  editButton.dataset.target = '#myModal';
  editButton.dataset.toggle = 'modal';
  editButton.addEventListener('click', () => {
    document.getElementById('header').innerHTML = key[j].title;
    document.getElementById('modal_title').value = key[j].title;
    document.getElementById('modal_description').value = key[j].description;
    document.getElementById('modal_priority').value = key[j].priority;
    document.getElementById('modal_dueDate').value = key[j].dueDate;
    const editContainer = document.getElementById('edit_button_container');
    editContainer.innerHTML = '';

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-info');
    editButton.innerHTML = 'Update';
    editButton.dataset.dismiss = 'modal';
    editButton.addEventListener('click', () => {
      updateTask(tasks, j);
    });

    editContainer.appendChild(editButton);
  });

  btnContainer.appendChild(editButton);
  btnContainer.appendChild(delButton);

  return btnContainer;
};



export default buttonsContainer;