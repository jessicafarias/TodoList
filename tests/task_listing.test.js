const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import tasksListing from '../src/tasks_listing';


describe('MODULE TASKS LISTING TEST', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });

  it('Expects a new task object instance', () => {
    const someValue = 'key';
    window.localStorage.setItem(someValue, JSON.stringify([]))
    const taskContainer = document.getElementById('tasks_container');
    expect(tasksListing(someValue, taskContainer, true)).toBeTruthy();
  });

  it('Expects error due to wrong key', () => {
    const someValue2 = 'key2';
    const taskContainer = document.getElementById('tasks_container');
    expect(tasksListing(someValue2, taskContainer, true)).toBe("Cannot read property 'length' of null");
  });


});