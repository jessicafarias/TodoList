const dropdown = () => {
  const categories = document.getElementById('dropdown');
  categories.innerHTML='';

  for(let i = 0; i <  localStorage.length; i++){
    const item = document.createElement('option');
    item.innerHTML = localStorage.key(i);
    categories.appendChild(item);
  }

  return true;
}

export default dropdown;