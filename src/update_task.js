const updateTask = (key, index) => {
  const tasks = JSON.parse(localStorage.getItem(key));
  console.log(tasks[index]);
}

export default updateTask;