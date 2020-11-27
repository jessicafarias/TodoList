import retrieveTasks from "./retrieve_tasks";

const deleteTask = (obj) => {
  for (let i = 0; i < localStorage.length; i++) {
    let key = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var index = key.findIndex(p => p.id == obj.id);

    if (index != -1) {
      localStorage.setItem(localStorage.key(i), JSON.stringify(Delete(index, key)));
      retrieveTasks(localStorage.key(i));
      break;
    }
  }

  function Delete(where, arr) {
    arr.splice(where,1)
    return arr;
  }
}

export default deleteTask;