const jsdom = require("jsdom");
const { JSDOM } = jsdom;

import tasksIndex from '../src/tasks_index';


describe('MODULE TASKS INDEX TEST', () => {
  beforeEach(function() {
    return JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    });
  });

  it('Expects a new task object instance', () => {
    const someValue = 'key';
    window.localStorage.setItem(someValue, JSON.stringify([]))
    expect(tasksIndex(someValue)).toBeTruthy();
  });

});