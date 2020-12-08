import dropdown from './dropdown';
import tasksIndex from './tasks_index';

const retrieveProjects = () => {
  const categories = document.getElementById('categories_container');
  categories.innerHTML = '';

  const all = document.createElement('li');
  all.classList.add('list-group-item', 'button-edit');
  all.innerHTML = 'All';
  all.addEventListener('click', () => {
    tasksIndex();
  });

  try{
    categories.appendChild(all);

    for (let i = 0; i < localStorage.length; i += 1) {
      const item = document.createElement('li');
      item.classList.add('list-group-item', 'button-edit');

      const dflex = document.createElement('div');
      dflex.classList.add('d-flex', 'justify-content-between');

      const paragraph = document.createElement('p');
      paragraph.innerHTML = localStorage.key(i);
      paragraph.addEventListener('click', () => {
        tasksIndex(localStorage.key(i));
      });

      const delButton = document.createElement('div');
      delButton.classList.add('btn', 'btn-danger');
      delButton.innerHTML = 'Delete';
      delButton.addEventListener('click', () => {
        localStorage.removeItem(localStorage.key(i));
        retrieveProjects();
        tasksIndex();
      });

      dflex.appendChild(paragraph);
      dflex.appendChild(delButton);
      item.appendChild(dflex);
      categories.appendChild(item);
    }

  }catch(error){
    return error.message
  }

  dropdown();

  return true;
};

export default retrieveProjects;