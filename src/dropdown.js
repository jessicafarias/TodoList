const dropdown = () => {
  const categories = document.getElementById('dropdown');

  for(let i = 0; i <  localStorage.length; i++){
    const item = document.createElement('div');
    item.classList.add('dropdown-item');
    item.innerHTML = localStorage.key(i);
    categories.appendChild(item);
  }

  return true;
}

export default dropdown;