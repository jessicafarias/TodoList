/* eslint import/no-cycle:"off", curly:"off" */
import buttonsContainer from './buttons_container';

const tasksListing = (tasks, taskContainer, verify) => {
  const key = JSON.parse(localStorage.getItem(tasks));

  try {
    for (let j = 0; j < key.length; j += 1) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      const dflex = document.createElement('div');
      dflex.classList.add('d-flex', 'justify-content-between');
      const info = document.createElement('span');
      info.innerHTML = `Task title: ${key[j].title} Date due ${key[j].dueDate}`;

      dflex.appendChild(info);
      dflex.appendChild(buttonsContainer(tasks, key, verify, j));

      listItem.appendChild(dflex);
      taskContainer.appendChild(listItem);
    }
  } catch (error) {
    return error.message;
  }

  return true;
};

export default tasksListing;