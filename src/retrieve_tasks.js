const retrieveTasks = () => {

  let tasks = JSON.parse(localStorage.getItem("work_stuff") || "[]");

  tasks.foreach = () => {
    
  }

  console.log(tasks);
}

export default retrieveTasks();