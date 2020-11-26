import retrieveTasks from './retrieve_tasks';
import dropdown from './dropdown';
import tasksIndex from './tasks_index';

const retrieveProjects = () => {

  const categories = document.getElementById('categories_container');
  categories.innerHTML ='';

  const all = document.createElement('li');
  all.classList.add('list-group-item', 'button-edit');
  all.innerHTML = 'All'
  all.addEventListener("click", () =>{
    tasksIndex();
  })
  categories.appendChild(all);

  for (let i = 0; i < localStorage.length; i++) {
    const item = document.createElement('li');
    item.classList.add('list-group-item', 'button-edit');
    item.innerHTML=localStorage.key(i);
    item.addEventListener("click", () => {
      retrieveTasks(localStorage.key(i));
    } )
    categories.appendChild(item);
  }
  dropdown();

  return true;
}

export default retrieveProjects;