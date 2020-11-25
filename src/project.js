import toDo from './todo';

const project = () => {

  let project = [];
  project.push(toDo);
  project.push(toDo);

  window.localStorage.setItem('work_stuff', project);
  let task1= window.localStorage.getItem('work_stuff');
  document.getElementById('c1_task1').innerHTML=task1[0].title;

  return true;

}

export default project();