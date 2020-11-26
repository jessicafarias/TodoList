import tasksListing from './tasks_listing';

const tasksIndex = () => {
  const arr = []
  for(let i = 0; i < localStorage.length; i++){
    let key = JSON.parse(localStorage.getItem(localStorage.key(i)));
    for(let j = 0; j < key.length; j++){
      arr.push(key[j]);
    }
  }

  tasksListing(arr);

  const addButton = document.getElementById('create_task')


  return(true);
}

export default tasksIndex;