import toDo from './todo';

const project = () => {

  let project = [];
  project.push(toDo);
  project.push(toDo);
  project.push(toDo);
  project.push(toDo);
  project.push(toDo);
  project.push(toDo);
  project.push(toDo);
  project.push(toDo);

  localStorage.setItem("work_stuff", JSON.stringify(project));
  localStorage.setItem("work_stuff2", JSON.stringify(project));
  let tasks = JSON.parse(localStorage.getItem("work_stuff") || "[]");


  //document.getElementById('c1_task1').innerHTML = tasks[0].title;
  //document.getElementById('c1_task2').innerHTML = tasks[1].title;
  

  return true;

}

export default project();