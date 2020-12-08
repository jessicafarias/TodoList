import tasksIndex from '../src/tasks_index';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;


describe('MODULE TASKS INDEX TEST', () => {
  beforeEach(() => JSDOM.fromFile('./dist/index.html')
    .then((dom) => {
      document.body.innerHTML = dom.window.document.body.outerHTML;
    }));

  it('Expects a new task object instance', () => {
    const someValue = 'key';
    window.localStorage.setItem(someValue, JSON.stringify([]));
    expect(tasksIndex(someValue)).toBeTruthy();
  });
});