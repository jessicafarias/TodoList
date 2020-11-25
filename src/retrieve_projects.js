const retrieveProjects = () => {

  const categories = document.getElementById('categories_container');

  for (let i = 0; i < localStorage.length; i++) {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    item.innerHTML=localStorage.key(i);

    categories.appendChild(item);
  }
}


export default retrieveProjects();