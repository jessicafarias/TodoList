import toDo from './todo';

const project = () => {

  let project = [];

  window.localStorage.setItem('work_stuff', project);

  return true;

}

export default project();