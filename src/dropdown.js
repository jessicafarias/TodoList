const dropdown = () => {
  const categories = document.getElementById('dropdown');
  categories.innerHTML = '';

  const standard = document.createElement('option');
  standard.innerHTML = 'Select category';
  categories.appendChild(standard);

  for (let i = 0; i < localStorage.length; i += 1) {
    const item = document.createElement('option');
    item.innerHTML = localStorage.key(i);
    categories.appendChild(item);
  }

  return true;
};

export default dropdown;